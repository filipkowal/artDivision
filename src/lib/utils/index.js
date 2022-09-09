export const fetchPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/artykuly/*.md');
	const posts = getFilesContent(allPostFiles, 'artykuly');

	return posts;
};

export const fetchOffers = async () => {
	const allPostFiles = import.meta.glob('/src/routes/oferta/*.md');
	const posts = getFilesContent(allPostFiles, 'oferta');

	return posts;
};

const getFilesContent = async (allPostFiles, category) => {
	const iterablePostFiles = Object.entries(allPostFiles);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, getContent]) => {
			const fileName = path.slice(12, -3).replace(category + '/', '');

			const { attributes, html } = await getContent();
			return { fileName, ...attributes, body: html };
		})
	);

	return posts;
};
