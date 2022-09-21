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
		margin-bottom: 2rem;
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
		text-align: center;
	}
	img {
		width: 160px;
		height: 200px;
		object-fit: cover;
	}
</style>
