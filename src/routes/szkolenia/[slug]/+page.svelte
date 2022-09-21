<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import SimpleCard from '../../../components/SimpleCard.svelte';

	export let data;
	const { title, body, price, priceReduced, level } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Szkolenia" />
	<div class="content">
		<h1>{title}</h1>
		<span class="level">{level}</span>
		<div>{@html body}</div>
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
		<footer>
			<h2>Formularz do zapisów</h2>
			<ContactForm name={title} />
		</footer>
	</div>
</article>

<style>
	h1 {
		font-weight: 700;
	}
	.price {
		color: #0000ff;
	}
	footer {
		border-top: 1px solid black;
		margin-top: 5rem;
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
