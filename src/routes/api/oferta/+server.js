import { fetchOffers } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json(await fetchOffers('/src/routes/oferta/*.md'));
};
