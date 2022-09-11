export async function load({ url }) {
	const posts = {
		zespol: await fetch(`${url.origin}/api/zespol`).then((response) => response.json()),
		onas: await fetch(`${url.origin}/api/onas`).then((response) => response.json())
	};

	return posts;
}

export const prerender = true;
