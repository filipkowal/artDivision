export async function load({ fetch }) {
	const posts = {
		artykuly: await fetch(`/api/artykuly`).then((response) => response.json()),
		oferty: await fetch(`/api/oferta`).then((response) => response.json()),
		szkolenia: await fetch(`/api/szkolenia`).then((response) => response.json())
	};

	return posts;
}
