export async function load() {
	const { attributes, html: body } = await import(
		'./damien-hirst-jeden-z-najdroższych-artystów-na-świecie.md'
	);

	return { attributes, body };
}
