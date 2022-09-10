export async function load({ fetch }) {
	const posts = {
		zespol: await fetch(`/api/zespol`).then((response) => response.json()),
		onas: await fetch('/api/onas').then((response) => response.json())
	};

	return posts;
}
