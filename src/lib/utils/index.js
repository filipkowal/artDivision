export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/artykuly/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const postNames = await Promise.all(
		iterablePostFiles.map(async ([path]) => {
			const postPath = path.slice(21);

			return postPath;
		})
	);

	return postNames;
};
