export async function load() {
	const { attributes, html: body } = await import(`../polityka-prywatnosci.md`);

	return { ...attributes, body };
}
