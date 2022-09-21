<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import SimpleCard from '../../../components/SimpleCard.svelte';

	export let data;
	const { title, body, price, priceReduced } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Szkolenia" />
	<div class="content">
		<h1>{title}</h1>
		<div>{@html body}</div>
		<div class="prices">
			{#if price}
				<div class="price-card"><SimpleCard title="Cena regularna" level={price} /></div>
			{/if}
			{#if priceReduced}
				<div class="price-card">
					<SimpleCard title="Cena przy wcześniejszym zapisie" level={priceReduced} />
				</div>
			{/if}
		</div>
		<footer>
			<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt"><b>kontaktu</b></a>.</p>
			<ContactForm name={title} />
		</footer>
	</div>
</article>

<style>
	h1 {
		font-weight: 700;
	}
	footer {
		border-top: 1px solid black;
		margin-top: 5rem;
	}
	.prices {
		margin-top: 4rem;
		/* max-width: 30rem; */
		display: inline-flex;
		gap: 1rem;

		/* justify-content: space-evenly; */
	}
	@media (max-width: 1200px) {
		.prices {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
	}
	/* :global(.prices > *) {
		width: 23rem;
		max-width: 100%;
		height: 12rem;
		display: flex;
		align-items: stretch;
		justify-items: stretch;
	} */
	.price-card {
		width: 23rem;
		max-width: 100%;
		height: 12rem;
	}
</style>
