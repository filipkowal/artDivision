<script>
	import ArticleCard from '../../components/ArticleCard.svelte';

	export let data;
	const { artykuly } = data;
</script>

<section class="articlesPage">
	<h1>Artykuły</h1>
	<div class="articles">
		{#each artykuly as artykul}
			<div class="card">
				<ArticleCard
					title={artykul.title}
					thumbnail={artykul.thumbnail}
					tags={artykul.tags}
					fileName={artykul.fileName}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.articles {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.card {
		padding-left: 0.6rem;
		padding-right: 0.6rem;
	}
</style>
