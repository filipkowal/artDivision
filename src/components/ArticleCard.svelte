<script>
	export let title, thumbnail, fileName, tags;
</script>

<a href={`./artykuly/${fileName}`}>
	<div class="articleCard">
		<div class="image-container">
			<img src={thumbnail} alt={title} />
		</div>
		<h2>{title}</h2>
		{#each tags as tag}
			<div class="tag"><p>{tag}</p></div>
		{/each}
	</div>
</a>

<style>
	:root {
		--url: url(--imageUrl);
	}
	.articleCard {
		max-width: 271px;
		margin-bottom: 2rem;
	}
	.image-container {
		text-align: center;
	}
	img {
		width: 160px;
		height: 200px;
		object-fit: cover;
	}
	.tag {
		border: 2px solid black;
		text-align: center;
	}
	.tag:not(:last-of-type) {
		border-bottom: 1px solid black;
	}
	.tag p {
		margin: 0.6rem 0;
	}
</style>
