<script>
	import ArticleCard from '../components/ArticleCard.svelte';
	import SimpleCard from '../components/SimpleCard.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let data;
	const { articles, offers, workshops, onas, zespol } = data;
</script>

<div class="section-container">
	<div class="hide-on-desktop">
		<Header {onas} />
	</div>

	<section class="articles column column-2">
		<a href="/artykuly"><h1>Artykuły</h1></a>
		<div class="cards-container">
			{#each articles as article}
				<ArticleCard
					title={article.title}
					thumbnail={article.thumbnail}
					fileName={article.fileName}
					tags={article.tags}
				/>
			{/each}
		</div>
	</section>
	<section class="offer column column-3">
		<a href="/oferta"><h1>Oferta</h1></a>
		<div class="cards-container">
			{#each offers as offer}
				<SimpleCard title={offer.title} fileName={offer.fileName} />
			{/each}
		</div>
	</section>
	<section class="workshops column column-4">
		<a href="/szkolenia"><h1>Szkolenia</h1></a>
		<div class="cards-container">
			{#each workshops as workshop}
				<SimpleCard title={workshop.title} fileName={workshop.fileName} level={workshop.level} />
			{/each}
		</div>
	</section>

	<div class="hide-on-desktop">
		<Footer {zespol} />
	</div>
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
	@media (min-width: 1201px) {
		.hide-on-desktop {
			display: none;
		}
	}
</style>
