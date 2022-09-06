import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const postNames = await fetchMarkdownPosts();

	const posts = await Promise.all(
		postNames.map(async (name) => {
			const { attributes, html: body } = await import(`../../artykuly/${name}`);
			return { attributes, body, name };
		})
	);

	return json(posts);
};
