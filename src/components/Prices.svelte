<script>
	import SimpleCard from './SimpleCard.svelte';

	export let price, priceReduced;
</script>

<div class="prices">
	{#if price}
		<div class="price-card">
			<SimpleCard title="Cena regularna"><span class="price">{price}</span></SimpleCard>
		</div>
	{/if}
	{#if priceReduced}
		<div class="price-card">
			<SimpleCard title="Cena przy wcześniejszym zapisie"
				><span class="price">{priceReduced}</span></SimpleCard
			>
		</div>
	{/if}
</div>

<style>
	.price {
		color: #0000ff;
	}
	.prices {
		margin-top: 4rem;
		display: inline-flex;
		gap: 1rem;
	}
	@media (max-width: 1200px) {
		.prices {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
	}
	.price-card {
		width: 23rem;
		max-width: 100%;
		height: 12rem;
	}
</style>
