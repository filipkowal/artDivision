<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import Prices from '../../../components/Prices.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import { trailingOrphansToNewLine } from '../../../lib/utils';

	export let data;
	const { title, body, price, priceReduced } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Oferta" />
	<div class="content">
		<h1 class="title">{trailingOrphansToNewLine(title)}</h1>
		<div>{@html body}</div>
		<footer>
			<Prices {price} {priceReduced} />
			<p>
				Zapisy i szczegółowe informacje: <br />j.sikorska@artdivision.pl <br />tel. 509 257 008
				<br />lub poprzez formularz poniżej.
			</p>
			<h2>Formularz do zapisów</h2>
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
