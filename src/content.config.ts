import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies: one Markdown file per case in src/content/work/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(), // short card title, e.g. "Insta360"
    headline: z.string().optional(), // H1 on the case page
    lead: z.string().optional(),
    timeline: z.string(),
    tag: z.string(),
    block: z.enum(['insta360', 'dreame', 'lab', 'writing', 'soon']),
    order: z.number(),
    featured: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z.string().optional(), // e.g. /images/insta360-cover.jpg
    coverAlt: z.string().optional(),
    coverPosition: z.string().optional(), // focal point for the photo crop, e.g. "50% 30%"
    // Typography cover (used until an approved photo exists). Only verified facts.
    coverKicker: z.string().optional(),
    coverTitle: z.string().optional(),
    coverSteps: z.array(z.string()).optional(),
    coverNote: z.string().optional(),
    summary: z.string().optional(), // one line: what I did
    metrics: z.array(z.string()).optional(), // 1–2 short numbers
    coverStat: z.string().optional(), // legacy, unused
    coverStatLabel: z.string().optional(),
    description: z.string().optional(),
    caseKicker: z.string().optional(),
    caseSummary: z.string().optional(),
    caseContext: z.array(z.string()).default([]),
    caseOutputs: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    scopeNote: z.string().optional(),
    tldr: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

// Lab projects and writing: one Markdown file per entry in src/content/lab/
const lab = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['lab', 'writing']),
    status: z.enum(['in-progress', 'published']).default('in-progress'),
    statusNote: z.string().optional(), // e.g. "Columbia class project"
    type: z.string().optional(), // writing only, e.g. "Video essay"
    date: z.coerce.date(),
    skills: z.array(z.string()).default([]),
    summary: z.string(),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverStyle: z.enum(['video', 'zine']).optional(),
    credit: z.string().optional(),
    linkPending: z.string().optional(), // text shown when the link isn't ready
    draft: z.boolean().default(false), // true = hidden from the live site
  }),
});

// Single pages written in Markdown (About)
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    opening: z.string().optional(),
    intro: z.string().optional(),
    timeline: z
      .array(z.object({ when: z.string(), where: z.string(), added: z.string(), highlight: z.boolean().default(false) }))
      .default([]),
    introExtra: z.string().optional(),
    beliefsIntro: z.string().optional(),
    beliefs: z.array(z.object({ icon: z.string(), title: z.string(), body: z.string() })).default([]),
    habitsIntro: z.string().optional(),
    habits: z.array(z.object({ icon: z.string(), title: z.string(), body: z.string() })).default([]),
    now: z.array(z.object({ label: z.string(), value: z.string(), link: z.string().optional() })).default([]),
    outside: z.string().optional(),
    sayHi: z.string().optional(),
    photos: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional(), video: z.string().optional(), position: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { work, lab, pages };
