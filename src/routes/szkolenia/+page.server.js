export async function load() {
	const response = await fetch(`/api/szkolenia`);
	const workshops = await response.json();

	return { workshops };
}
