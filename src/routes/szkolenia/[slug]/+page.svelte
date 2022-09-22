<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import Prices from '../../../components/Prices.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body, price, priceReduced, level } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Szkolenia" />
	<div class="content">
		<h1>{title}</h1>
		<span class="level">{level}</span>
		<div>{@html body}</div>
		<Prices {price} {priceReduced} />
		<footer>
			<h2>Formularz do zapisów</h2>
			<ContactForm name={title} />
		</footer>
	</div>
</article>

<style>
	.level {
		color: #0000ff;
	}
	h1 {
		font-weight: 700;
	}
	footer {
		border-top: 1px solid black;
		margin-top: 5rem;
	}
</style>
