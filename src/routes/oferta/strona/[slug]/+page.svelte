<script>
	import SectionHeader from '../../../../components/SectionHeader.svelte';
	import Pagination from '../../../../components/Pagination.svelte';
	import SimpleCardOffer from '../../../../components/SimpleCardOffer.svelte';

	export let data;
</script>

<div class="page-container">
	<SectionHeader title="Oferta" />
	<section class="offers">
		{#each data.offers as offer}
			<SimpleCardOffer fileName={offer.fileName} title={offer.title} />
		{/each}
	</section>
	<Pagination previousPageHref={data.previousPageHref} nextPageHref={data.nextPageHref} />
</div>

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
