import { fetchWorkshops, getPaginatedEntries } from '../../../../lib/utils';

export async function load({ params }) {
	const workshops = await fetchWorkshops();

	return getPaginatedEntries({
		entries: workshops,
		params,
		name: 'workshops',
		urlName: 'szkolenia'
	});
}
