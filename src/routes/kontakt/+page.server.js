export async function load() {
	const { attributes, html: body } = await import(`../kontakt.md`);

	return { ...attributes, body };
}
