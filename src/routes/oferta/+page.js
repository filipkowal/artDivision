export async function load({ fetch }) {
	const response = await fetch(`/api/oferta`);
	const offers = await response.json();

	return { offers };
}
