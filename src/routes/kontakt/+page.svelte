<script>
	import ContactForm from '../../components/ContactForm.svelte';
	import Meta from '../../components/Meta.svelte';
	import PageTransition from '../../components/PageTransition.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';

	export let data;
</script>

<Meta path="kontakt" />
<PageTransition>
	<div class="page-container column">
		<SectionHeader title="Kontakt" />
		<div class="content">
			<h1>Skontaktuj się z nami</h1>
			<ContactForm name="kontakt" />
			<div class="contact-data">{@html data.body}</div>
		</div>
	</div>
</PageTransition>

<style>
	.contact-data {
		margin-top: 3rem;
		color: #0000ff;
		font-style: normal;
		line-height: 1.5rem;
	}
</style>
