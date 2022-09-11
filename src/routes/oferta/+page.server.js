export async function load() {
	const response = await fetch(`/api/oferta`);
	const offers = await response.json();

	return { offers };
}
