// import { fetchMarkdownPosts } from '../../lib/utils';

export async function load({ fetch }) {
	const response = await fetch(`/api/artykuly`);
	const posts = await response.json();

	return posts;
}
