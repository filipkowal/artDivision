<script>
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body } = data;
</script>

<article class="column page-container">
	<SectionHeader title="Szkolenia" />
	<div>{@html body}</div>
</article>

<footer>
	<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt">kontaktu</a>.</p>
</footer>
