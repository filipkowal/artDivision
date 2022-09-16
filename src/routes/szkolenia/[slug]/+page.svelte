<script>
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body } = data;
</script>

<article class="column page-container">
	<SectionHeader title="Szkolenia" />
	<h1>{title}</h1>
	<div>{@html body}</div>
</article>

<footer>
	<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt">kontaktu</a>.</p>
</footer>

<style>
	h1 {
		font-size: 4.3rem;
		line-height: 5rem;
	}
	:global(p, li) {
		font-size: 1.2rem;
	}
</style>
