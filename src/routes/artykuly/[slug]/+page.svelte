<script>
	export let data;
	const { title, tags, date, author, thumbnail, intro, body } = data;
</script>

<article>
	<header>
		<h2 class="header-title">Artykuły</h2>
		<a href="/"><h1 class="back">&#8617</h1></a>
	</header>
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
	<p>Jeśli masz jakieś pytania, zapraszamy do <a href="/kontakt">kontaktu</a>.</p>
</footer>

<style>
	article {
		overflow: auto;
		height: 100vh;
	}
	h1 {
		font-size: 5rem;
	}
	h2 {
		font-size: 4rem;
	}
</style>
