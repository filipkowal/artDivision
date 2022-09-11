export async function load({ url }) {
	const posts = {
		artykuly: await fetch(`${url.origin}/api/artykuly`).then((response) => response.json()),
		oferty: await fetch(`${url.origin}/api/oferta`).then((response) => response.json()),
		szkolenia: await fetch(`${url.origin}/api/szkolenia`).then((response) => response.json())
	};

	return posts;
}
