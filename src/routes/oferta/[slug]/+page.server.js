export async function load({ params, url }) {
	const { attributes, html: body } = await import(`${url.origin}/../${params.slug}.md`);

	return { ...attributes, body };
}

export const prerender = true;
