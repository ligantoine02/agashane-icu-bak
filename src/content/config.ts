import { defineCollection, reference, z } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		cover: z.string(),
		draft: z.boolean(),
		published: z.string(),
		updated: z.string(),
		tags: z.array(reference("tags")),
		authors: z.array(reference("authors")),
	}),
});

const authorsCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		description: z.string().optional(),
	}),
});

const tagsCollection = defineCollection({
	type: "data",
	schema: z.object({
		tag: z.string(),
	}),
});

export const collections = {
	posts: postsCollection,
	authors: authorsCollection,
	tags: tagsCollection,
};
