import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	ui: {
		brand: { name: "Agashane" },
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			entryLayout: "content",
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				summary: fields.text({ label: "Summary", multiline: true }),
				cover: fields.image({
					label: "Cover image",
					description: "The post cover image",
					directory: "src/content/posts/covers",
					publicPath: "/posts/covers/",
				}),
				draft: fields.checkbox({
					label: "Draft",
					description: "Set this post in draft",
				}),
				published: fields.date({
					label: "Published at",
				}),
				updated: fields.date({
					label: "Updated at",
				}),
				tags: fields.array(
					fields.relationship({
						label: "Tags",
						collection: "tags",
					}),
					{
						label: "Tags",
						itemLabel: (props) => props.value ?? "General",
					},
				),
				authors: fields.array(
					fields.relationship({
						label: "Authors",
						collection: "authors",
					}),
					{
						label: "Authors",
						itemLabel: (props) => props.value ?? "Add an author",
					},
				),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: "src/content/posts/_images",
						publicPath: "src/content/posts/_images/",
						schema: {
							title: fields.text({
								label: "Caption",
								description: "Text to display under the image",
							}),
						},
					},
				}),
			},
		}),

		authors: collection({
			label: "Author",
			slugField: "name",
			path: "src/content/authors/*",
			schema: {
				name: fields.slug({
					name: { label: "Name" },
				}),
				description: fields.text({
					label: "Description",
					multiline: true,
				}),
			},
		}),

		tags: collection({
			label: "Tag",
			slugField: "tag",
			path: "src/content/tags/*",
			schema: {
				tag: fields.slug({ name: { label: "Name" } }),
			},
		}),
	},
});
