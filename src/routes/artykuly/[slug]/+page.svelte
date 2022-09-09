<script>
	export let data;
	const {
		attributes: { title, tags, date, author, thumbnail, intro },
		body
	} = data;
</script>

<article>
	<a href="/">Powrót</a>
	<h1>{title}</h1>
	<date>{date}</date>
	<span class="author">{author}</span>
	<ul>
		{#each tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>
	<image src={thumbnail} />
	<h3>{intro}</h3>
	<div>{@html body}</div>
</article>

<footer>
	<p>Jeśli masz jakieś pytania, zapraszamy do <a href="contact">kontaktu</a>.</p>
</footer>
