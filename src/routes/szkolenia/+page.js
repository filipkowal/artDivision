export async function load({ fetch }) {
	const response = await fetch(`/api/szkolenia`);
	const workshops = await response.json();

	return { workshops };
}
