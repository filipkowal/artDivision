<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import Prices from '../../../components/Prices.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body, price, priceReduced } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Oferta" />
	<div class="content">
		<h1>{title}</h1>
		<div>{@html body}</div>
		<Prices {price} {priceReduced} />
		<footer>
			<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt"><b>kontaktu</b></a>.</p>
			<ContactForm name={title} />
		</footer>
	</div>
</article>

<style>
	footer {
		border-top: 1px solid black;
		margin-top: 5rem;
	}
	h1 {
		font-weight: 700;
	}
</style>
