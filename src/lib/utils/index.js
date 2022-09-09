export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/artykuly/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, getContent]) => {
			const fileName = path.slice(21, -3);

			const { attributes, html } = await getContent();
			return { fileName, ...attributes, html };
		})
	);

	return posts;
};
