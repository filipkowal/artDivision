<script>
	import ContactForm from '../../../components/ContactForm.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Szkolenia" />
	<div class="non-article-content">
		<h1>{title}</h1>
		<div>{@html body}</div>
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
</style>
