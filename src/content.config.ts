import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every case study carries its own evidence. `flag` marks results that went the
// wrong way; they render in clay, at the same weight as the wins.
const evidence = z.object({
  // coerce: bare YAML numbers like `value: 9` should not need quoting.
  value: z.coerce.string(),
  label: z.string(),
  tone: z.enum(['signal', 'flag', 'neutral']).default('signal'),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      period: z.string(),
      role: z.string(),
      summary: z.string(),
      url: z.string().url().optional(),
      order: z.number(),
      featured: z.boolean().default(false),
      stack: z.array(z.string()),
      evidence: z.array(evidence),
      image: image().optional(),
      imageAlt: z.string().optional(),
    })
    .refine((data) => !data.image || data.imageAlt, {
      message: 'An image needs imageAlt. A screenshot with no alt text is a hole in the page.',
      path: ['imageAlt'],
    }),
});

export const collections = { work };
