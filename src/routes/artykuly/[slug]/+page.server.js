export async function load({ params }) {
	const { attributes, html: body } = await import(`../${params.slug}.md`);

	return { ...attributes, body: addCaptionsToImages(body) };
}

function addCaptionsToImages(body) {
	if (body.includes('<img')) {
		return body.replace(/<img\s.*?>/g, (match) => {
			const title = match.match(/title="(.*)"/)?.[1];
			if (title) return `<figure>${match}<figcaption>${title}</figcaption></figure>`;
			return `<figure>${match}</figure>`;
		});
	}

	return body;
}
