<script>
	import SectionHeader from '../../../../components/SectionHeader.svelte';
	import Pagination from '../../../../components/Pagination.svelte';
	import SimpleCardOffer from '../../../../components/SimpleCardOffer.svelte';
	import PageTransition from '../../../../components/PageTransition.svelte';

	export let data;
</script>

<PageTransition>
	<div class="page-container column">
		<SectionHeader title="Oferta" />
		<section class="offers">
			{#each data.offers as offer}
				<SimpleCardOffer fileName={offer.fileName} title={offer.title} />
			{/each}
		</section>
		<Pagination previousPageHref={data.previousPageHref} nextPageHref={data.nextPageHref} />
	</div>
</PageTransition>

<style>
	.offers {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.6rem;
	}
	@media (max-width: 1200px) {
		.offers {
			display: flex;
			flex-direction: column;
		}
	}
</style>
