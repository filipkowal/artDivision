<script>
	import ArticleCard from '../components/ArticleCard.svelte';
	import SimpleCard from '../components/SimpleCard.svelte';

	export let data;
	const { artykuly, oferty, szkolenia } = data;
</script>

<div class="section-container">
	<section class="articles column column-2">
		<a href="/artykuly"><h1>Artykuły</h1></a>
		<div class="cards-container">
			{#each artykuly as artykul}
				<ArticleCard {...artykul} />
			{/each}
		</div>
	</section>
	<section class="offer column column-3">
		<a href="/oferta"><h1>Oferta</h1></a>
		<div class="cards-container">
			{#each oferty as oferta}
				<SimpleCard title={oferta.title} fileName={oferta.fileName} />
			{/each}
		</div>
	</section>
	<section class="workshops column column-4">
		<a href="/szkolenia"><h1>Szkolenia</h1></a>
		<div class="cards-container">
			{#each szkolenia as szkolenie}
				<SimpleCard title={szkolenie.title} fileName={szkolenie.fileName} level={szkolenie.level} />
			{/each}
		</div>
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
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		overflow-y: auto;
		height: 100vh;
	}
	section:not(:last-of-type) {
		border-right: 1px solid black;
	}
	h1 {
		font-weight: 400;
		font-size: 1.7rem;
	}
	.cards-container {
		margin-bottom: 2.5rem;
	}

	@media (max-width: 1200px) {
		.section-container {
			display: flex;
			flex-direction: column;
		}
		section {
			overflow: hidden;
			min-height: 0;
			border-right: 0;
		}
		section:not(:last-of-type) {
			border-bottom: 2px solid black;
			border-right: 0;
		}
	}
</style>
