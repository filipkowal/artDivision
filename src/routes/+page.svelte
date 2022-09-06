<script>
	export let data;
</script>

<main>
	<section class="articles"><a href="artykuly"><h1>Artykuły</h1></a></section>
	<section class="offer"><a href="oferta"><h1>Oferta</h1></a></section>
	<section class="workshops"><a href="szkolenia"><h1>Szkolenia</h1></a></section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 1200px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
