<script>
	export let title, level, fileName;
</script>

<a href={`./${level ? 'szkolenia' : 'oferta'}/${fileName}`}>
	<div class="simpleCard">
		<h2 class="title">{title}</h2>
		<p class={`footer ${level ? 'level' : ''}`}>{level ?? 'więcej'}</p>
	</div>
</a>

<style>
	.simpleCard {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		border: 2px solid black;
		padding: 0 1rem;
		margin-bottom: 0.7rem;
	}
	.level {
		color: #0000ff;
	}
</style>
