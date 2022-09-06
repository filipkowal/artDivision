<div class="layout-container">
	<section><h1>Art Division</h1></section>
	<main><slot /></main>
	<section><h1>Zespół</h1></section>
</div>

<style>
	.layout-container {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 1;
		height: 100vh;
	}
	@media (max-width: 1200px) {
		.layout-container {
			display: flex;
			flex-direction: column;
		}
	}
</style>
