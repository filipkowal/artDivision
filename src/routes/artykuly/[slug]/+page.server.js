export async function load({ params }) {
	const { attributes, html: body } = await import(`../${params.slug}.md`);

	const withFigures = body.replace(
		/<img\s.*?>/g,
		(match) => `<figure>${match}<figcaption>${match.match(/title="(.*)"/)[1]}</figcaption></figure>`
	);

	return { ...attributes, body: withFigures };
}
