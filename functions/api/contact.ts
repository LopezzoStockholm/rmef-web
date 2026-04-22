/**
 * POST /api/contact — Cloudflare Pages Function
 *
 * Pålitlig leverans genom flera kanaler i prioritetsordning:
 *  1) GitHub Issues (ALLTID tillgängligt — Daniel får email-notifiering från GitHub direkt)
 *  2) Resend (om RESEND_API_KEY satt — riktiga mejl från noreply@rmef.se)
 *  3) MailChannels (fallback, kräver DNS-records för att gå igenom)
 *  4) Discord/Telegram webhook (om satt)
 *
 * Ingen kanal krävs för att få ett framgångs-svar — GitHub är primär och alltid på.
 */

interface Env {
  GITHUB_TOKEN?: string;
  GITHUB_REPO?: string;
  RESEND_API_KEY?: string;
  TO_EMAIL?: string;
  FROM_EMAIL?: string;
  DISCORD_WEBHOOK?: string;
  TELEGRAM_BOT?: string;
  TELEGRAM_CHAT?: string;
  KV_SUBMISSIONS?: KVNamespace;
}

interface Payload {
  namn?: string;
  foretag?: string;
  email?: string;
  telefon?: string;
  typ?: string;
  meddelande?: string;
  _hp?: string;
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

async function postToGitHub(env: Env, subject: string, markdown: string, data: Payload): Promise<{ ok: boolean; url?: string; error?: string }> {
  if (!env.GITHUB_TOKEN || !env.GITHUB_REPO) return { ok: false, error: "no_github_config" };
  const url = `https://api.github.com/repos/${env.GITHUB_REPO}/issues`;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        authorization: `token ${env.GITHUB_TOKEN}`,
        accept: "application/vnd.github+json",
        "content-type": "application/json",
        "user-agent": "rmef-contact-form",
      },
      body: JSON.stringify({
        title: subject,
        body: markdown,
        labels: ["kontaktform", `typ:${(data.typ || "annat").toLowerCase().replace(/[^a-z0-9]/g, "-")}`],
      }),
    });
    if (r.ok) {
      const issue: any = await r.json().catch(() => ({}));
      return { ok: true, url: issue.html_url };
    }
    const body = await r.text().catch(() => "");
    return { ok: false, error: `github_${r.status}: ${body.slice(0, 120)}` };
  } catch (e: any) {
    return { ok: false, error: `github_throw: ${e?.message ?? "unknown"}` };
  }
}

async function sendViaResend(env: Env, subject: string, text: string, html: string, data: Payload): Promise<{ ok: boolean; error?: string }> {
  if (!env.RESEND_API_KEY) return { ok: false, error: "no_resend_key" };
  const to = env.TO_EMAIL || "info@rmef.se";
  const from = env.FROM_EMAIL || "noreply@rmef.se";
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: `RM Entreprenad & Fasad <${from}>`, to: [to], reply_to: data.email, subject, text, html }),
  });
  return r.ok ? { ok: true } : { ok: false, error: `resend_${r.status}` };
}

async function sendViaDiscord(env: Env, subject: string, text: string): Promise<boolean> {
  if (!env.DISCORD_WEBHOOK) return false;
  try {
    const r = await fetch(env.DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: "rmef.se", content: `**${subject}**\n\`\`\`\n${text.slice(0, 1800)}\n\`\`\`` }),
    });
    return r.ok;
  } catch {
    return false;
  }
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const { request, env } = ctx;

  let data: Payload;
  const ct = request.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) data = await request.json();
    else {
      const f = await request.formData();
      data = Object.fromEntries(f.entries()) as Payload;
    }
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "invalid_payload" }), { status: 400, headers: { "content-type": "application/json" } });
  }

  if (data._hp) return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });

  if (!data.namn || !data.email || !data.meddelande) {
    return new Response(JSON.stringify({ ok: false, error: "missing_fields" }), { status: 400, headers: { "content-type": "application/json" } });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return new Response(JSON.stringify({ ok: false, error: "invalid_email" }), { status: 400, headers: { "content-type": "application/json" } });
  }

  const subject = `Ny projektförfrågan från ${data.namn}${data.foretag ? ` (${data.foretag})` : ""}`;

  const markdown = `## Ny projektförfrågan via rmef.se

| | |
|---|---|
| **Namn** | ${data.namn} |
| **Företag** | ${data.foretag || "—"} |
| **E-post** | ${data.email} |
| **Telefon** | ${data.telefon || "—"} |
| **Typ av projekt** | ${data.typ || "—"} |
| **Skickat** | ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })} |
| **IP** | ${request.headers.get("cf-connecting-ip") || "okänd"} |

### Meddelande

${data.meddelande}

---
_Automatiskt skapad från kontaktformuläret på rmef.se_`;

  const text = `Ny projektförfrågan via rmef.se

Namn:     ${data.namn}
Företag:  ${data.foretag || "—"}
E-post:   ${data.email}
Telefon:  ${data.telefon || "—"}
Typ:      ${data.typ || "—"}

Meddelande:
${data.meddelande}

Skickat: ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })}`;

  const html = `<!DOCTYPE html><html><body style="font-family: Inter, system-ui, sans-serif; background:#F7F4EE; padding:24px; color:#111;">
<div style="max-width:560px; margin:0 auto; background:#fff; border-radius:16px; padding:32px;">
<p style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#C8381F; font-weight:600; margin:0 0 8px;">Ny projektförfrågan</p>
<h1 style="font-size:20px; margin:0 0 24px; letter-spacing:-0.02em;">${esc(data.namn!)}${data.foretag ? ` · <span style="color:#666">${esc(data.foretag)}</span>` : ""}</h1>
<table style="width:100%; border-collapse:collapse; margin-bottom:24px; font-size:14px;">
<tr><td style="padding:8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#999; width:120px;">E-post</td><td><a href="mailto:${esc(data.email!)}">${esc(data.email!)}</a></td></tr>
${data.telefon ? `<tr><td style="padding:8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#999;">Telefon</td><td><a href="tel:${esc(data.telefon)}">${esc(data.telefon)}</a></td></tr>` : ""}
${data.typ ? `<tr><td style="padding:8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#999;">Typ</td><td>${esc(data.typ)}</td></tr>` : ""}
</table>
<div style="background:#F7F4EE; padding:20px; border-radius:12px; white-space:pre-wrap; line-height:1.6;">${esc(data.meddelande!)}</div>
</div></body></html>`;

  const errors: string[] = [];
  const channels: Record<string, boolean> = {};

  // 1. GitHub Issues (primär)
  const gh = await postToGitHub(env, subject, markdown, data);
  channels.github = gh.ok;
  if (!gh.ok && gh.error !== "no_github_config") errors.push(gh.error!);

  // 2. Resend (kör parallellt om key finns)
  if (env.RESEND_API_KEY) {
    const r = await sendViaResend(env, subject, text, html, data);
    channels.email = r.ok;
    if (!r.ok) errors.push(r.error!);
  }

  // 3. Discord webhook
  channels.discord = await sendViaDiscord(env, subject, text);

  // 4. KV audit-trail
  if (env.KV_SUBMISSIONS) {
    try {
      const id = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
      await env.KV_SUBMISSIONS.put(id, JSON.stringify({ ...data, ts: new Date().toISOString(), channels, errors }), { expirationTtl: 60 * 60 * 24 * 365 });
    } catch {}
  }

  const anySucceeded = channels.github || channels.email || channels.discord;

  if (anySucceeded) {
    return new Response(JSON.stringify({ ok: true, channels }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  console.error("Contact form: all channels failed", errors);
  return new Response(JSON.stringify({ ok: false, error: "all_channels_failed", detail: errors.join("; ") }), {
    status: 502,
    headers: { "content-type": "application/json" },
  });
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: { "access-control-allow-origin": "*", "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type" },
  });
};
