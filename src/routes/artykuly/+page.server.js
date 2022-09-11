export async function load() {
	const response = await fetch(`/api/artykuly`);
	const posts = await response.json();

	return posts;
}
