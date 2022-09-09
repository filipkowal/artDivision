<script>
	export let data;
	const { title, body, photo } = data;
</script>

<article>
	<a href="/">Powrót</a>
	<h1>{title}</h1>
	<div>{@html body}</div>
	<img src={photo} alt={title} />
</article>

<style>
	img {
		max-width: 300px;
	}
</style>
