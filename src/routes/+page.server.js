import { fetchOffers, fetchArticles, fetchWorkshops } from '../lib/utils';

export async function load() {
	const posts = {
		artykuly: await fetchArticles(),
		oferty: await fetchOffers(),
		szkolenia: await fetchWorkshops()
	};

	return posts;
}
