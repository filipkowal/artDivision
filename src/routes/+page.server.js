import { fetchOffers, fetchArticles, fetchWorkshops } from '../lib/utils';

export async function load() {
	const articles = await fetchArticles();
	const offers = await fetchOffers();
	const workshops = await fetchWorkshops();

	return {
		articles: articles.slice(0, 20),
		offers: offers.slice(0, 20),
		workshops: workshops.slice(0, 20)
	};
}
