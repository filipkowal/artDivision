<script>
	import ContactData from '../../components/ContactData.svelte';
	import ContactForm from '../../components/ContactForm.svelte';
	import PageTransition from '../../components/PageTransition.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';
</script>

<PageTransition>
	<div class="page-container column">
		<SectionHeader title="Kontakt" />
		<div class="content">
			<h1>Skontaktuj się z nami</h1>
			<ContactForm name="kontakt" />
			<div class="contact-data">
				<ContactData />
			</div>
		</div>
	</div>
</PageTransition>

<style>
	.contact-data {
		margin-top: 3rem;
	}
</style>
