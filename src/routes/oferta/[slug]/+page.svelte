<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body } = data;
</script>

<article class="column page-container">
	<SectionHeader title="Oferta" />
	<div class="non-article-content">
		<h1>{title}</h1>
		<div>{@html body}</div>
	</div>
</article>

<footer>
	<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt">kontaktu</a>.</p>
	<ContactForm name={title} />
</footer>
