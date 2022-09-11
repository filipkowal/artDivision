import { fetchOffers } from '../../lib/utils';

export async function load() {
	const offers = await fetchOffers();

	return { offers };
}
