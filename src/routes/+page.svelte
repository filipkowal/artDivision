<script>
	export let data;
	const { artykuly, oferta, szkolenia } = data;
</script>

<div class="section-container">
	<section class="articles">
		<a href="artykuly"><h1>Artykuły</h1></a>
		{#each artykuly as artykul}
			<li>
				<a href="./artykuly/{artykul.fileName}">{artykul.title}</a>
			</li>
		{/each}
	</section>
	<section class="offer">
		<a href="oferta"><h1>Oferta</h1></a>
		{#each oferta as o}
			<li>
				<a href="./oferta/{o.fileName}">{o.title}</a>
			</li>
		{/each}
	</section>
	<section class="workshops">
		<a href="szkolenia"><h1>Szkolenia</h1></a>
		{#each szkolenia as szkolenie}
			<li>
				<a href="./szkolenia/{szkolenie.fileName}">{szkolenie.title}</a>
			</li>
		{/each}
	</section>
</div>

<style>
	.section-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		min-height: 100%;
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
