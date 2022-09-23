<script>
	import Tag from '../../../components/Tag.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import MobileFooter from '../../../components/MobileFooter.svelte';
	export let data;
	const { title, tags, date, author, body, onas } = data;
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
				<span class="author"><span class="author-title">Autor:&nbsp;</span> {author}</span>
			</div>
		</div>
		<div class="article-content-body">{@html body}</div>
		<footer>
			<p>Jeśli masz jakieś pytania, zapraszamy do <b><a href="/kontakt">kontaktu</a></b>.</p>
		</footer>
	</div>
</article>
<MobileFooter logo={onas.logo} />

<style>
	.article-content {
		margin: 0 0 2.5rem 0;
		border: 2px solid black;
		padding: 2rem;
	}
	@media (max-width: 1200px) {
		.article-content {
			margin: 2rem 0.5rem 2.5rem 0.5rem;
			border: none;
			padding: 0;
		}
	}
	.tags {
		display: inline-flex;
		gap: 6px;
	}

	.author {
		display: inline-flex;
		align-items: end;
	}
	@media (max-width: 1200px) {
		.author {
			font-weight: 600;
		}
		.author-title {
			display: none;
		}
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
		padding: calc(3.8rem + 5px) 0 3.8rem 0;
		border-bottom: 1px solid black;
	}
	.article-content-header h1 {
		font-size: 4.3rem;
		letter-spacing: -1px;
		line-height: 1.025em;
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
		max-width: 900px;
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
	@media (max-width: 1200px) {
		.article-content-header h1 {
			max-width: 100%;
		}
	}
	:global(.article-content-body p) {
		width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 1200px) {
		:global(.article-content-body p) {
			max-width: initial;
			padding-left: 0;
		}
	}
	:global(.article-content-body figure) {
		margin-top: 2.7rem;
		margin-left: 0;
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
		width: 600px;
		margin-left: auto;
		margin-right: auto;
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
