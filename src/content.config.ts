import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const manuals = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/manuals',
    }),
    schema: z.object({
        title: z.string(),
        players: z.string().optional(),
        duration: z.string().optional(),
        difficulty: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        cover: z.string().optional(),
    }),
});

export const collections = {
    manuals,
};