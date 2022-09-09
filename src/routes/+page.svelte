<script>
	import ArticleCard from '../components/ArticleCard.svelte';
	import SimpleCard from '../components/SimpleCard.svelte';
	import Layout from './+layout.svelte';

	export let data;
	const { artykuly, oferta: oferty, szkolenia } = data;
	console.log(szkolenia);
</script>

<div class="section-container">
	<section class="articles column">
		<a href="artykuly"><h1>Artykuły</h1></a>
		{#each artykuly as artykul}
			<ArticleCard {...artykul} />
		{/each}
	</section>
	<section class="offer column">
		<a href="oferta"><h1>Oferta</h1></a>
		{#each oferty as oferta}
			<SimpleCard title={oferta.title} fileName={oferta.fileName} />
		{/each}
	</section>
	<section class="workshops column">
		<a href="szkolenia"><h1>Szkolenia</h1></a>
		{#each szkolenia as szkolenie}
			<SimpleCard title={szkolenie.title} fileName={szkolenie.fileName} level={szkolenie.level} />
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
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		overflow-y: auto;
		height: 100vh;
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
