<script>
	import Tag from '../../../components/Tag.svelte';

	export let data;
	const { title, tags, date, author, thumbnail, intro, body } = data;
</script>

<article>
	<header>
		<h2 class="header-title">Artykuły</h2>
		<a href="/"><h1 class="back">&#8617</h1></a>
	</header>
	<div class="article-header">
		<div class="header-row">
			<h1>{title}</h1>
			<time datetime={date}>{date.slice(0, 10)}</time>
		</div>
		<div class="header-row">
			{#each tags as tag}
				<Tag {tag} />
			{/each}
			<span class="author">Autor: {author}</span>
		</div>
	</div>
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
		height: 100;
	}
	h1 {
		font-size: 5rem;
	}
	h2 {
		font-size: 4rem;
	}
	.article-header {
		width: 100%;
	}
	.header-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.article-header h1 {
		width: 70%;
		margin-top: 0;
	}
</style>
