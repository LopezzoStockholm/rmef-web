/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Tar emot kontaktformulärets inskick och skickar ett mejl till info@rmef.se.
 *
 * Skickar via Resend om RESEND_API_KEY är satt som env var (rekommenderat).
 * Fallback: MailChannels via Cloudflare Workers (kräver SPF/DKIM-setup på domänen för leverans).
 *
 * Lägg till i Cloudflare Pages dashboard → Settings → Environment variables:
 *   - RESEND_API_KEY (från resend.com, gratis nivå räcker)
 *   - TO_EMAIL (default: info@rmef.se)
 *   - FROM_EMAIL (ex: noreply@rmef.se — måste vara verifierad domän i Resend)
 */

interface Env {
  RESEND_API_KEY?: string;
  TO_EMAIL?: string;
  FROM_EMAIL?: string;
  TURNSTILE_SECRET?: string;
}

interface ContactPayload {
  namn?: string;
  foretag?: string;
  email?: string;
  telefon?: string;
  typ?: string;
  meddelande?: string;
  "cf-turnstile-response"?: string;
  _hp?: string; // honeypot
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const { request, env } = ctx;

  let data: ContactPayload;
  const contentType = request.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries()) as ContactPayload;
    }
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "invalid_payload" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  // Honeypot
  if (data._hp) {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
  }

  // Basic validation
  if (!data.namn || !data.email || !data.meddelande) {
    return new Response(JSON.stringify({ ok: false, error: "missing_fields" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return new Response(JSON.stringify({ ok: false, error: "invalid_email" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const toEmail = env.TO_EMAIL || "info@rmef.se";
  const fromEmail = env.FROM_EMAIL || "noreply@rmef.se";
  const subject = `Ny projektförfrågan från ${data.namn}${data.foretag ? ` (${data.foretag})` : ""}`;

  const text = `Ny projektförfrågan via rmef.se

Namn: ${data.namn}
Företag: ${data.foretag || "—"}
E-post: ${data.email}
Telefon: ${data.telefon || "—"}
Typ av projekt: ${data.typ || "—"}

Meddelande:
${data.meddelande}

---
Skickat: ${new Date().toISOString()}
`;

  const html = `
<!DOCTYPE html><html><body style="font-family: Inter, system-ui, sans-serif; background:#F7F4EE; padding:24px; color:#111;">
<div style="max-width:560px; margin:0 auto; background:#fff; border-radius:16px; padding:32px;">
  <p style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#B5121B; font-weight:600; margin:0 0 8px;">Ny projektförfrågan</p>
  <h1 style="font-size:20px; margin:0 0 24px; letter-spacing:-0.02em;">${escapeHtml(data.namn!)}${data.foretag ? ` · <span style="color:#666">${escapeHtml(data.foretag)}</span>` : ""}</h1>
  <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
    <tr><td style="padding:8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#999; width:120px;">E-post</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(data.email!)}">${escapeHtml(data.email!)}</a></td></tr>
    ${data.telefon ? `<tr><td style="padding:8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#999;">Telefon</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(data.telefon)}">${escapeHtml(data.telefon)}</a></td></tr>` : ""}
    ${data.typ ? `<tr><td style="padding:8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#999;">Typ</td><td style="padding:8px 0;">${escapeHtml(data.typ)}</td></tr>` : ""}
  </table>
  <div style="background:#F7F4EE; padding:20px; border-radius:12px; white-space:pre-wrap; line-height:1.6;">${escapeHtml(data.meddelande!)}</div>
  <p style="font-size:11px; color:#999; margin-top:24px;">Skickat via kontaktformuläret på rmef.se · ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })}</p>
</div>
</body></html>`;

  // Primary: Resend
  if (env.RESEND_API_KEY) {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "authorization": `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: `RM Entreprenad & Fasad <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });
    if (resp.ok) {
      return new Response(JSON.stringify({ ok: true, provider: "resend" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }
    const body = await resp.text();
    return new Response(JSON.stringify({ ok: false, error: "send_failed", provider: "resend", detail: body.slice(0, 200) }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }

  // Fallback: MailChannels (fungerar för Cloudflare Workers/Pages — kräver SPF-include + DKIM för prod)
  const mcBody = {
    personalizations: [{ to: [{ email: toEmail, name: "RM Entreprenad & Fasad" }] }],
    from: { email: fromEmail, name: "RM Entreprenad & Fasad" },
    reply_to: { email: data.email },
    subject,
    content: [
      { type: "text/plain", value: text },
      { type: "text/html", value: html },
    ],
  };
  const mcResp = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mcBody),
  });
  if (mcResp.ok || mcResp.status === 202) {
    return new Response(JSON.stringify({ ok: true, provider: "mailchannels" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
  const mcText = await mcResp.text();
  return new Response(JSON.stringify({ ok: false, error: "send_failed", provider: "mailchannels", detail: mcText.slice(0, 300) }), {
    status: 502,
    headers: { "content-type": "application/json" },
  });
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
};
