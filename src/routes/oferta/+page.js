export async function load({ fetch }) {
	const response = await fetch(`/api/oferta`);
	const posts = await response.json();

	return posts;
}
