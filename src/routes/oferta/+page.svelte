<script>
	import SimpleCard from '../../components/SimpleCard.svelte';

	export let data;
	const { offers } = data;
</script>

<div class="offers-container">
	<h1>Oferta</h1>
	<section class="offers">
		{#each offers as offer}
			<SimpleCard fileName={offer.fileName} title={offer.title} />
		{/each}
	</section>
</div>

<style>
	.offers-container {
		padding: 0.6rem;
	}
	.offers {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.6rem;
	}
	h1 {
		font-weight: 400;
		font-size: 1.7rem;
	}
</style>
