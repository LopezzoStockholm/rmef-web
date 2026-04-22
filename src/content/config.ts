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
  }),
});

export const collections = { artiklar };
