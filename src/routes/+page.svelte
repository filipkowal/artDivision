<main>
	<section class="articles"><h1>Artykuły</h1></section>
	<section class="offer"><h1>Oferta</h1></section>
	<section class="workshops"><h1>Szkolenia</h1></section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		min-height: 100%;
	}

	@media (max-width: 1200px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
