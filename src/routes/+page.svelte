<div class="section-container">
	<section class="articles"><a href="artykuly"><h1>Artykuły</h1></a></section>
	<section class="offer"><a href="oferta"><h1>Oferta</h1></a></section>
	<section class="workshops"><a href="szkolenia"><h1>Szkolenia</h1></a></section>
</div>

<style>
	.section-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	section {
		min-height: 100vh;
	}
	section:not(:last-of-type) {
		border-right: 1px solid black;
	}

	@media (max-width: 1200px) {
		.section-container {
			display: flex;
			flex-direction: column;
		}
		section {
			min-height: 0;
			border-right: 0;
		}
		section:not(:last-of-type) {
			border-bottom: 2px solid black;
			border-right: 0;
		}
	}
</style>
