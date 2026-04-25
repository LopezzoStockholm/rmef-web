import { defineCollection, z } from "astro:content";

const artiklar = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("RM Entreprenad & Fasad"),
    published: z.date(),
    updated: z.date().optional(),
    category: z.enum(["Guide", "Branschinsikt", "Kostnad", "Teknik", "Upphandling"]),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    // SEO: HowTo-schema (för step-by-step guider)
    howToSteps: z.array(z.object({
      name: z.string(),
      text: z.string(),
    })).optional(),
    howToTotalTime: z.string().optional(), // ISO 8601 duration, t.ex. PT2H
    // SEO: FAQPage-schema (rich snippets i Google)
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
  }),
});

export const collections = { artiklar };
