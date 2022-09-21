import { fetchArticles, getPaginatedEntries } from '../../../../lib/utils';

export async function load({ params }) {
	const articles = await fetchArticles();

	return getPaginatedEntries({ entries: articles, params, name: 'articles', urlName: 'artykuly' });
}
