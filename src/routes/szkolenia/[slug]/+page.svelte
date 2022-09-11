<script>
	export let data;
	const { title, body } = data;
</script>

<article>
	<a href="/">Powrót</a>
	<h1>{title}</h1>
	<div>{@html body}</div>
</article>

<footer>
	<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt">kontaktu</a>.</p>
</footer>
