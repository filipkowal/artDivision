import { fetchOffers, getPaginatedEntries } from '../../../../lib/utils';

export async function load({ params }) {
	const offers = await fetchOffers();

	return getPaginatedEntries({ entries: offers, params, name: 'offers', urlName: 'oferta' });
}
