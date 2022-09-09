import { fetchWorkshops } from '../../../lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json(await fetchWorkshops());
};
