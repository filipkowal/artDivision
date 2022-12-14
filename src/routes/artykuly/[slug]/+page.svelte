<script>
	import Tag from '../../../components/Tag.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import MobileFooter from '../../../components/MobileFooter.svelte';
	import { trailingOrphansToNewLine } from '../../../lib/utils';
	import PageTransition from '../../../components/PageTransition.svelte';
	import Meta from '../../../components/Meta.svelte';

	export let data;
	const { title, tags, date, author, body, onas, metaDescription, path } = data;
</script>

<Meta {title} {date} {author} {metaDescription} {path} />
<PageTransition>
	<article class="column page-container column-2">
		<SectionHeader title="Artykuły" href="/artykuly" />
		<div class="article-content">
			<div class="article-content-header">
				<div class="header-row">
					<h1>{trailingOrphansToNewLine(title)}</h1>
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
		<MobileFooter logo={onas.logo} />
	</article>
</PageTransition>

<style>
	.article-content {
		margin: 0 0 10px 0;
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
			margin-top: 0 !important;
		}
		.author-title {
			display: none;
		}
		.tags {
			margin-top: 1.4rem !important;
		}
	}
	:global(.article-content h1) {
		font-weight: bold;
	}
	:global(.article-content .tag) {
		box-shadow: 1px 0 0 0 black, 0 1px 0 0 black, 1px 1px 0 0 black, 1px 0 0 0 black inset,
			0 1px 0 0 black inset !important;
	}
	:global(.article-content .tag p) {
		font-size: 13px;
		margin: 0 10px 1px 10px !important;
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
		margin-bottom: 60px;
	}
	@media (max-width: 1200px) {
		.article-content-header h1 {
			margin-bottom: 0.6rem;
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
		margin-top: 120px;
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
			border-bottom: none !important;
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
		max-width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 1200px) {
		:global(.article-content-body p) {
			padding-left: 0;
		}
	}
	:global(.article-content-body figure) {
		margin-top: 2.7rem;
		margin-left: 0;
		max-width: 100%;
	}
	@media (max-width: 1200px) {
		:global(.article-content-body figure) {
			margin: 0;
		}
	}
	:global(.article-content-body img) {
		max-width: 40%;
	}
	:global(.article-content-body figcaption) {
		margin-top: 6px;
		font-size: 0.8rem;
		width: 600px;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
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
			width: 100%;
			max-width: 100%;
		}
		:global(.article-content-body figcaption) {
			margin-left: 0;
		}
	}
</style>
