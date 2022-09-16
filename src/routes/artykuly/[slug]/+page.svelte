<script>
	import Tag from '../../../components/Tag.svelte';
	import BackButton from '../../../components/BackButton.svelte';
	export let data;
	const { title, tags, date, author, intro, body } = data;
</script>

<article class="column">
	<header>
		<div><h2 class="header-title">Artykuły</h2></div>
		<BackButton />
	</header>
	<div class="content">
		<div class="content-header">
			<div class="header-row">
				<h1>{title}</h1>
				<time datetime={date}>{date.slice(0, 10)}</time>
			</div>
			{#if tags.length}
				<div class="header-row">
					<div class="tags">
						{#each tags as tag}
							<Tag {tag} />
						{/each}
					</div>
					<span class="author">Autor: {author}</span>
				</div>
			{/if}
		</div>
		{#if intro}
			<h3>{intro}</h3>
		{/if}
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
		margin: 0 0.6rem;
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
	.header-title {
		font-weight: 400;
		font-size: 1.7rem;
	}
	.tags {
		display: flex;
	}
	:global(.tags div) {
		border: 2px solid black !important;
		margin-right: 0.3rem;
	}
	:global(.content h1) {
		font-family: NewsPlantinItalic;
		font-style: italic;
		font-weight: 400;
	}
	:global(.content-body h1) {
		font-size: 3.5rem;
		font-family: NewsPlantinItalic;
		font-style: italic;
		font-weight: 400;
		border-top: 1px solid black;
		padding: 3.8rem 0;
		border-bottom: 1px solid black;
	}
	.content-header h1 {
		font-size: 4.3rem;
	}
	:global(.content h2) {
		font-size: 4rem;
	}
	:global(.content h3) {
		line-height: 2.2rem;
		font-size: 1.7rem;
	}
	:global(.content p) {
		font-size: 1.15rem;
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
	:global(.content-body figure) {
		margin-top: 2.7rem;
	}
	:global(.content-body img) {
		max-width: 25rem;
	}
	:global(.content-body figcaption) {
		margin-top: 1rem;
		font-size: 0.8rem;
		margin-left: 5.8rem;
	}
	:global(.content-body figcaption::before) {
		content: '';
		background-image: url('/AD_search.svg');
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		margin-right: 0.5rem;
		transform: translateY(15%);
	}
</style>
