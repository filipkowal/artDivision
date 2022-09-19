import { fetchOffers, fetchArticles, fetchWorkshops } from '../lib/utils';

export async function load() {
	const posts = {
		articles: await fetchArticles(),
		offers: await fetchOffers(),
		workshops: await fetchWorkshops()
	};

	return posts;
}
