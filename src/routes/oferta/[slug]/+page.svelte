<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import PageTransition from '../../../components/PageTransition.svelte';
	import Prices from '../../../components/Prices.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import Meta from '../../../components/Meta.svelte';
	import { trailingOrphansToNewLine } from '../../../lib/utils';

	export let data;
	const { title, body, price, date, metaDescription, path } = data;
</script>

<Meta {title} {date} {metaDescription} {path} />

<PageTransition>
	<article class="column page-container column-2">
		<SectionHeader title="Oferta" href="/oferta" />
		<div class="content">
			<h1 class="header">{trailingOrphansToNewLine(title)}</h1>
			<div class="body">{@html body}</div>
			<footer>
				<Prices {price} />
				<p>
					Szczegółowe informacje: <br />j.sikorska@artdivision.pl <br />tel. 509 257 008
					<br />lub poprzez formularz poniżej.
				</p>
				<h2>Formularz do kontaktu</h2>
				<ContactForm name={title} />
			</footer>
		</div>
	</article>
</PageTransition>

<style>
	footer {
		border-top: 1px solid black;
		margin-top: 80px;
	}
	@media (max-width: 1200px) {
		footer {
			border-top: none;
		}
	}
	h1 {
		font-weight: 700;
	}
</style>
