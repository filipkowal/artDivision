<script>
	import Tag from '../../../components/Tag.svelte';

	export let data;
	const { title, tags, date, author, thumbnail, intro, body } = data;
	console.log(thumbnail);
</script>

<article class="column">
	<header>
		<div><h2 class="header-title">Artykuły</h2></div>
		<div><a href="/"><h1 class="back">&#8617</h1></a></div>
	</header>
	<div class="content">
		<div class="content-header">
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
		<div class="content-body">{@html body}</div>
		<footer>
			<p>Jeśli masz jakieś pytania, zapraszamy do <b><a href="/kontakt">kontaktu</a></b>.</p>
		</footer>
	</div>
</article>

<style>
	article {
		overflow: auto;
		height: 100vh;
		margin: 1rem;
	}
	.content {
		margin: 1rem 0;
		border: 2px solid black;
		padding: 2rem;
	}
	header {
		display: flex;
		flex-direction: row;
	}
	header > * {
		width: calc(50% - 1rem);
	}
	:global(.content p) {
		font-size: 1.15rem;
	}
	:global(.content h3) {
		font-size: 1.8rem;
	}
	:global(.content h1) {
		font-size: 5rem;
		font-family: NewsPlantinItalic;
		font-style: italic;
	}
	:global(.content h2) {
		font-size: 4rem;
	}
	footer {
		margin: 6rem 0 3rem 0;
	}
	.content-header {
		width: 100%;
	}
	.header-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.header-row:last-of-type {
		padding-bottom: 1rem;
		border-bottom: 1px solid black;
	}
	.content-header h1 {
		max-width: 85%;
		margin-top: 0;
	}
	:global(.content-body p) {
		max-width: 70%;
		padding-left: 10rem;
	}
	:global(.content-body p img) {
		margin-left: -10rem;
	}
</style>
