export const fetchArticles = async () => {
	const allPostFiles = import.meta.glob('/src/routes/artykuly/*.md');
	const posts = getFilesContent(allPostFiles, 'artykuly');

	return posts;
};

export const fetchOffers = async () => {
	const allPostFiles = import.meta.glob('/src/routes/oferta/*.md');
	const posts = getFilesContent(allPostFiles, 'oferta');

	return posts;
};

export const fetchWorkshops = async () => {
	const allPostFiles = import.meta.glob('/src/routes/szkolenia/*.md');
	const posts = getFilesContent(allPostFiles, 'szkolenia');

	return posts;
};

export const fetchTeam = async () => {
	const allPostFiles = import.meta.glob('/src/routes/zespol/*.md');
	const posts = getFilesContent(allPostFiles, 'zespol');

	return posts;
};

export const fetchAbout = async () => {
	const postFile = await import('/src/routes/onas/onas.md');
	const { attributes, html: body } = postFile;

	return { ...attributes, body };
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
