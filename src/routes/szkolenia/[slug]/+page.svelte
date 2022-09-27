<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import Prices from '../../../components/Prices.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import { trailingOrphansToNewLine } from '../../../lib/utils';

	export let data;
	const { title, body, price, priceReduced, level } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Szkolenia" />
	<div class="content">
		<div class="header">
			<h1 class="title">{trailingOrphansToNewLine(title)}</h1>
			<span class="level">{level}</span>
		</div>
		<div class="body">{@html body}</div>
		<footer>
			<Prices {price} {priceReduced} />
			<p>
				Zapisy i szczegółowe informacje: <br />j.sikorska@artdivision.pl <br />tel. 509 257 008
				<br />lub poprzez formularz poniżej.
			</p>
			<h2 class="contact">Formularz do zapisów</h2>
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
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	@media (max-width: 1200px) {
		.header {
			flex-direction: column;
		}
	}
	@media (min-width: 1201px) {
		:global(.content .title) {
			max-width: 600px;
		}
		.level {
			margin-top: 0.6rem;
		}
	}
	footer {
		border-top: 1px solid black;
		margin-top: 5rem;
	}
	@media (max-width: 1200px) {
		footer {
			border-top: none;
		}
		.contact {
			margin-top: 4rem;
		}
	}
</style>
