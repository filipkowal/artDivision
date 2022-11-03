export const fetchArticles = async () => {
	const allPostFiles = import.meta.glob('/src/routes/artykuly/*.md');
	const posts = await getFilesContent(allPostFiles, 'artykuly');

	return sortByDate(posts);
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
	const posts = await getFilesContent(allPostFiles, 'zespol');

	return sortByDate(posts);
};

function sortByDate(posts) {
	return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
}

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

export const getPaginatedEntries = ({ entries, params, name, urlName = name }) => {
	const perPage = 20;
	const pageNumber = Number(params.slug) || 1;
	const hrefBase = `/${urlName}/strona`;

	const start = pageNumber * perPage - perPage;
	const end = start + perPage;

	const entriesPaginated = entries.slice(start, end);

	const previousPageHref = pageNumber > 1 ? `${hrefBase}/${pageNumber - 1}` : null;
	const nextPageHref =
		entries.length > pageNumber * perPage ? `${hrefBase}/${pageNumber + 1}` : null;

	return { [name]: entriesPaginated, previousPageHref, nextPageHref };
};

export const trailingOrphansToNewLine = (text) =>
	text.replace(/ . /g, (t) => t.slice(0, 2) + '\u00A0');
