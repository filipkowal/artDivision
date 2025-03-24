<script>
	import Tag from './Tag.svelte';
	import { trailingOrphansToNewLine } from '../lib/utils';

	export let title, thumbnail, fileName, tags;

	function enableHoverEffect(event) {
		const target = event.currentTarget;
		target.classList.add('hover-active');
		setTimeout(() => target.classList.remove('hover-active'), 1000);
	}
</script>

<a href={`/artykuly/${fileName}`} on:touchstart={enableHoverEffect}>
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
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (hover: hover) {
		a:hover img {
			mix-blend-mode: screen;
			-webkit-filter: grayscale(100%);
			filter: grayscale(100%);
		}
		a:hover .image-container {
			background: #0000ff;
		}
	}

	.hover-active .image-container {
		background: #0000ff;
	}
	.hover-active img {
		mix-blend-mode: screen;
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
</style>
