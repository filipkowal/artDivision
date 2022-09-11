import { fetchAbout, fetchTeam } from '../lib/utils';

export async function load() {
	const posts = {
		zespol: await fetchTeam(),
		onas: await fetchAbout()
	};

	return posts;
}

export const prerender = true;
