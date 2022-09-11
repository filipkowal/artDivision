import { fetchArticles } from '../../lib/utils';

export async function load() {
	const articles = await fetchArticles();

	return { articles };
}
