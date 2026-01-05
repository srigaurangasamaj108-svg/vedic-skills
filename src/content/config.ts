import { defineCollection, z } from 'astro:content';

export const collections = {
  scripture: defineCollection({
    type: 'content',
    schema: z.object({
      // Canonical identification
      tradition: z.enum([
        'sruti',
        'smrti',
        'purana',
        'agama',
        'darshana',
        'vedanga',
        'upaveda',
        'upanga',
        'gaudiya-vaishnava'
      ]),

      textGroup: z.string(), 
      // e.g. "bhagavad-gita", "ramayana"

      chapter: z.number(),
      verse: z.number().optional(),

      // Language availability
      languages: z.array(
        z.enum(['sa', 'en', 'hi'])
      ),

      // Core content flags
      hasTranslation: z.boolean().default(true),
      hasCommentary: z.boolean().default(false),

      // Commentary metadata
      commentators: z.array(z.string()).optional(),

      // Ordering & integrity
      canonicalOrder: z.number(),

      // Safety & governance
      status: z.enum([
        'draft',
        'reviewed',
        'canonical'
      ]).default('draft'),
    }),
  }),
};
