<script>
	import Tag from './Tag.svelte';

	export let title, thumbnail, fileName, tags;
</script>

<a href={`/artykuly/${fileName}`}>
	<div class="articleCard">
		<div class="image-container">
			<img src={thumbnail} alt={title} />
		</div>
		<h2>{title}</h2>
		{#each tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</a>

<style>
	:root {
		--url: url(--imageUrl);
	}
	.articleCard {
		margin-bottom: 3.57rem;
	}
	h2 {
		font-family: NewsPlantinItalic;
		font-weight: 400;
		font-size: 2.1rem;
		line-height: 2.1rem;
	}
	:global(.articleCard:hover .tag) {
		border-color: #0000ff;
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
	a:hover img {
		mix-blend-mode: screen;
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
	a:hover .image-container {
		background: #0000ff;
	}
</style>
