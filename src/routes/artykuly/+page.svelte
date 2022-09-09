<script>
	import Layout from '../+layout.svelte';
	import ArticleCard from '../../components/ArticleCard.svelte';

	export let data;
	const { artykuly } = data;
</script>

<section class="articlesPage">
	<h1>Artykuły</h1>
	<div class="articles">
		{#each artykuly as artykul}
			<ArticleCard
				title={artykul.title}
				thumbnail={artykul.thumbnail}
				tags={artykul.tags}
				fileName={artykul.fileName}
			/>
		{/each}
	</div>
</section>

<style>
	.articles {
		display: flex;
	}
</style>
