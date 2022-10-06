export async function load({ params }) {
	const { attributes, html: body } = await import(`../${params.slug}.md`);
	const path = 'szkolenia/' + params.slug;

	return { ...attributes, body, path };
}
