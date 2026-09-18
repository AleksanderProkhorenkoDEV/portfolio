import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

const projectsCollection = defineCollection({
    loader: glob({ base: './src/content/projects/', pattern: '**/*.json' }),
    schema: ({ image }) => z.object({
        order: z.number(),
        title: z.string(),
        tags: z.array(z.string()),
        image: image(),
        liveUrl: z.url().optional(),
        githubUrl: z.url().optional(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projectsCollection };