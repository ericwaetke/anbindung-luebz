// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const articles = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/articles" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		// content: z.string(),
	}),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { articles };