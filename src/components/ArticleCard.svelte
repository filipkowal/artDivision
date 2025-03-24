<script>
	import Tag from './Tag.svelte';
	import { trailingOrphansToNewLine } from '../lib/utils';

	export let title, thumbnail, fileName, tags;

	function addHoverEffect(event) {
		event.currentTarget.classList.add('hovered');
	}

	function removeHoverEffect(event) {
		event.currentTarget.classList.remove('hovered');
	}
</script>

<a href={`/artykuly/${fileName}`} on:touchstart={addHoverEffect} on:touchend={removeHoverEffect}>
	<div class="articleCard">
		<div class="image-container">
			<img src={thumbnail + '?nf_resize=smartcrop&w=160&h=200'} alt={title} />
		</div>
		<h2>{trailingOrphansToNewLine(title)}</h2>
		{#each tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</a>

<style>
	.articleCard {
		position: relative;
		margin-bottom: 3.57rem;
	}

	h2 {
		font-family: 'NewsPlantinItalic';
		font-weight: 400;
		font-size: 2.1rem;
		line-height: 2.1rem;
		font-style: italic;
	}

	.image-container {
		width: 160px;
		height: 200px;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		overflow: hidden;
	}

	.image-container::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #0000ff;
		opacity: 0;
		transition: opacity 0.1s ease-in-out;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: filter 0.1s ease-in-out;
	}

	a:hover .image-container::before {
		opacity: 1;
	}

	a:hover img {
		mix-blend-mode: screen;
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}

	/* Mobile touch effect */
	.articleCard.hovered .image-container::before {
		opacity: 1;
	}

	.articleCard.hovered img {
		mix-blend-mode: screen;
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
</style>
