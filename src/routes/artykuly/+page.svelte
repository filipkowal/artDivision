<script>
	import ArticleCard from '../../components/ArticleCard.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';

	export let data;
	const { articles } = data;
</script>

<section class="page-container">
	<SectionHeader title="Artykuły" />
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
	@media (max-width: 1200px) {
		.articles {
			display: flex;
			flex-direction: column;
		}
	}
	.card {
		padding-left: 0.6rem;
		padding-right: 0.6rem;
	}
</style>
