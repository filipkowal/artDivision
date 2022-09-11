export async function load({ params }) {
	const { attributes, html: body } = await import(`../${params.slug}.md`);

	return { ...attributes, body };
}

export const prerender = true;
