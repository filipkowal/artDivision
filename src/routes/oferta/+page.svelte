<script>
	import SectionHeader from '../../components/SectionHeader.svelte';
	import SimpleCard from '../../components/SimpleCard.svelte';

	export let data;
	const { offers } = data;
</script>

<div class="page-container">
	<SectionHeader title="Oferta" />
	<section class="offers">
		{#each offers as offer}
			<SimpleCard fileName={offer.fileName} title={offer.title} />
		{/each}
	</section>
</div>

<style>
	.offers {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.6rem;
	}
</style>
