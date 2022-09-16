<script>
	export let zespol;
</script>

<footer class="column">
	<h2>Zespół</h2>
	{#each zespol as osoba}
		<div>
			<h3><a href="/zespol/{osoba.fileName}">{osoba.title}</a></h3>
			<img src={osoba.photo} alt={osoba.title} class="square" />
			<p>{@html osoba.body}</p>
		</div>
	{/each}
</footer>

<style>
	footer {
		padding-right: 1rem;
		padding-left: 1rem;
		overflow-y: auto;
		height: 100vh;
	}
	h2 {
		font-weight: 400;
		font-size: 1.7rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	@media (max-width: 1200px) {
		footer {
			border-bottom: 2px solid black;
			border-left: 1px solid black;
			margin: 0 0.5rem;
		}
	}
	img {
		max-width: 100%;
	}
</style>
