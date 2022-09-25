<script>
	import ArticleCard from '../components/ArticleCard.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import MobileFooter from '../components/MobileFooter.svelte';
	import SimpleCardOffer from '../components/SimpleCardOffer.svelte';
	import SimpleCardWorkshop from '../components/SimpleCardWorkshop.svelte';

	export let data;
	const { articles, offers, workshops, onas, zespol } = data;
</script>

<div class="section-container">
	<div class="hide-on-desktop" id="onas">
		<Header {onas} />
	</div>

	<section class="articles column column-2">
		<a href="/artykuly"><h1 class="section-title">Artykuły</h1></a>
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
		<a href="/artykuly"><button class="see-all-button">Zobacz wszystkie artykuły</button></a>
	</section>
	<section class="offer column column-3">
		<a href="/oferta"><h1 class="section-title">Oferta</h1></a>
		<div class="cards-container">
			{#each offers as offer}
				<SimpleCardOffer title={offer.title} fileName={offer.fileName} />
			{/each}
		</div>
		<a href="/oferta"><button class="see-all-button">Zobacz wszystkie oferty</button></a>
	</section>
	<section class="workshops column column-4">
		<a href="/szkolenia"><h1 class="section-title">Szkolenia</h1></a>
		<div class="cards-container">
			{#each workshops as workshop}
				<SimpleCardWorkshop
					title={workshop.title}
					fileName={workshop.fileName}
					level={workshop.level}
				/>
			{/each}
		</div>
		<a href="/szkolenia"><button class="see-all-button">Zobacz wszystkie szkolenia</button></a>
	</section>

	<div class="hide-on-desktop" id="zespol">
		<Footer {zespol} />
	</div>

	<MobileFooter logo={onas.logo} />
</div>

<style>
	.see-all-button {
		position: initial;
		margin: 0 1.5px 10px 1.5px;
		width: calc(100% - 3px);
	}
	@media (max-width: 1200px) {
		.see-all-button {
			position: absolute;
			display: block;
			bottom: 1rem;
			margin-bottom: 0;
			width: calc(100% - 9.4px * 2);
		}
	}
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
		margin-bottom: 10px;
	}
	.section-title {
		margin-left: 0.4rem;
	}

	@media (max-width: 1200px) {
		.section-container {
			display: flex;
			flex-direction: column;
		}
		section {
			overflow: hidden;
			min-height: 0;
			height: auto;
			/* height: 100vh; */
			max-height: 150vh;
			border-right: 0;
			padding-top: 0;
		}
		section:not(:last-of-type) {
			border-bottom: 2px solid black;
			border-right: 0;
		}
		.section-title {
			margin-top: 0.5rem;
			margin-bottom: 2.5rem;
			font-weight: 600;
		}
	}
	@media (min-width: 1201px) {
		.hide-on-desktop {
			display: none;
		}
	}
</style>
