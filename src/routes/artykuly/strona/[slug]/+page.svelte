<script>
	import ArticleCard from '../../../../components/ArticleCard.svelte';
	import SectionHeader from '../../../../components/SectionHeader.svelte';
	import Pagination from '../../../../components/Pagination.svelte';
	import PageTransition from '../../../../components/PageTransition.svelte';

	export let data;
</script>

<PageTransition>
	<section class="page-container column">
		<SectionHeader title="Artykuły" />
		<div class="articles">
			{#each data.articles as article}
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
		<Pagination previousPageHref={data.previousPageHref} nextPageHref={data.nextPageHref} />
	</section>
</PageTransition>

<style>
	.articles {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (max-width: 1200px) {
		.articles {
			display: flex;
			flex-direction: column;
			margin-top: 2rem;
		}
	}
	.card {
		padding-left: 0.6rem;
		padding-right: 0.6rem;
	}
</style>
