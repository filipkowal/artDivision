<script>
	import SimpleCard from './SimpleCard.svelte';

	export let price, priceReduced;
</script>

<div class="prices">
	{#if price}
		<SimpleCard title="Cena regularna"><span class="price">{price}</span></SimpleCard>
	{/if}
	{#if priceReduced}
		<SimpleCard title="Cena przy wcześniejszym zapisie"
			><span class="price">{priceReduced}</span></SimpleCard
		>
	{/if}
</div>

<style>
	.price {
		color: #0000ff;
	}
	.prices {
		margin-top: 1rem;
		margin-bottom: 4rem;
		display: inline-flex;
		gap: 1rem;
		align-items: stretch;
	}
	@media (max-width: 1200px) {
		.prices {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
	}
	:global(.prices .simpleCard) {
		width: 260px;
	}
	@media (max-width: 1200px) {
		:global(.prices .simpleCard) {
			width: calc(100% - 2rem);
			margin-bottom: 12px;
		}
	}
	:global(.prices .simpleCard:hover) {
		border-color: black;
	}
	:global(.prices .simpleCard .title) {
		font-weight: 700;
		font-size: 1.86rem;
		margin-bottom: 0.2rem;
	}
</style>
