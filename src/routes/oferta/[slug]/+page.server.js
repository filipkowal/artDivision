export async function load({ params }) {
	const { attributes, html: body } = await import(`../${params.slug}.md`);
	const path = 'oferta/' + params.slug;

	return { ...attributes, body, path };
}

export const prerender = true;
