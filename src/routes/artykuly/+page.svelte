<script>
	import ArticleCard from '../../components/ArticleCard.svelte';

	export let data;
	const { articles } = data;
</script>

<section class="articlesPage">
	<h1>Artykuły</h1>
	<div class="articles">
		{#each articles as article}
			<div class="card">
				<ArticleCard
					title={article.title}
					thumbnail={article.thumbnail}
					tags={article.tags}
					fileName={article.fileName}
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
