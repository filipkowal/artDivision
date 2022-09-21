<script>
	import Tag from '../../../components/Tag.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	export let data;
	const { title, tags, date, author, intro, body } = data;
</script>

<article class="column page-container column-2">
	<SectionHeader title="Artykuły" />
	<div class="article-content">
		<div class="article-content-header">
			<div class="header-row">
				<h1>{title}</h1>
				<time datetime={date}>{date.slice(0, 10)}</time>
			</div>
			<div class="header-row">
				{#if tags.length}
					<div class="tags">
						{#each tags as tag}
							<Tag {tag} />
						{/each}
					</div>
				{/if}
				<span class="author">Autor: {author}</span>
			</div>
		</div>
		{#if intro}
			<h3>{intro}</h3>
		{/if}
		<div class="article-content-body">{@html body}</div>
		<footer>
			<p>Jeśli masz jakieś pytania, zapraszamy do <b><a href="/kontakt">kontaktu</a></b>.</p>
		</footer>
	</div>
</article>

<style>
	.article-content {
		margin: 1rem 0 2.5rem 0;
		border: 2px solid black;
		padding: 2rem;
	}
	.tags {
		display: flex;
	}
	:global(.tags div) {
		border: 2px solid black !important;
		margin-right: 0.3rem;
	}
	:global(.article-content h1) {
		font-family: NewsPlantinItalic;
		font-style: italic;
		font-weight: 400;
	}
	:global(.article-content-body h1) {
		font-size: 3.5rem;
		font-family: NewsPlantinItalic;
		font-style: italic;
		font-weight: 400;
		border-top: 1px solid black;
		padding: 3.8rem 0;
		border-bottom: 1px solid black;
	}
	.article-content-header h1 {
		font-size: 4.3rem;
	}
	@media (max-width: 1200px) {
		.article-content-header h1 {
			font-size: 3rem;
		}
	}
	:global(.article-content h2) {
		font-size: 4rem;
	}
	@media (max-width: 1200px) {
		:global(.article-content h1) {
			font-size: 3rem;
		}
	}
	:global(.article-content h3) {
		line-height: 2.2rem;
		font-size: 1.7rem;
	}
	:global(.article-content p) {
		font-size: 1.15rem;
	}
	footer {
		margin: 6rem 0 3rem 0;
	}
	.article-content-header {
		width: 100%;
	}
	.header-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 1200px) {
		.header-row {
			flex-direction: column;
		}
		.header-row > * {
			display: inline-block;
			margin-top: 1rem;
		}
		.header-row:last-of-type {
			flex-direction: column-reverse;
		}
	}
	.header-row:last-of-type {
		padding-bottom: 1rem;
		border-bottom: 1px solid black;
	}
	.article-content-header h1 {
		max-width: 85%;
		margin-top: 0;
	}
	:global(.article-content-body p) {
		max-width: 70%;
		padding-left: 10rem;
	}
	@media (max-width: 1200px) {
		:global(.article-content-body p) {
			max-width: initial;
			padding-left: 0;
		}
	}
	:global(.article-content-body figure) {
		margin-top: 2.7rem;
	}
	@media (max-width: 1200px) {
		:global(.article-content-body figure) {
			margin: 0;
		}
	}
	:global(.article-content-body img) {
		max-width: 25rem;
	}
	:global(.article-content-body figcaption) {
		margin-top: 1rem;
		font-size: 0.8rem;
		margin-left: 5.8rem;
	}
	:global(.article-content-body figcaption::before) {
		content: '';
		background-image: url('/AD_search.svg');
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		margin-right: 0.5rem;
		transform: translateY(15%);
	}
	@media (max-width: 1200px) {
		:global(.article-content-body img) {
			max-width: 100%;
		}
		:global(.article-content-body figcaption) {
			margin-left: 0;
		}
	}
</style>
