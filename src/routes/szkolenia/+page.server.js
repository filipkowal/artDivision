import { fetchWorkshops } from '../../lib/utils';

export async function load() {
	const workshops = await fetchWorkshops();

	return { workshops };
}
