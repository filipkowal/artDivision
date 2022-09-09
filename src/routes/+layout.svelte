<script>
	export let data;
	const { zespol, onas } = data;
</script>

<div class="layout-container">
	<header class="column">
		<img src={onas.logo} alt="logo-art-division" />
		<img src={onas.thumbnail} alt="zespół" />
		<p>{@html onas.body}</p>
	</header>
	<main><slot /></main>
	<footer class="column">
		<h2>Zespół</h2>
		{#each zespol as osoba}
			<div>
				<h3><a href="./zespol/{osoba.fileName}">{osoba.title}</a></h3>
				<img src={osoba.photo} alt={osoba.title} />
				<p>{@html osoba.body}</p>
			</div>
		{/each}
	</footer>
</div>

<style>
	:root {
		font-family: Neue Haas Unica Pro, sans-serif;
		font-size: 14px;
	}
	:global(h1, h2) {
		font-weight: 400;
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	main {
		border-right: 1px solid black;
		overflow: auto;
	}
	@media (max-width: 1200px) {
		main {
			margin: 0 0.5rem;
			border-left: 1px solid black;
			border-bottom: 2px solid black;
		}
	}

	.layout-container {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
	}
	header,
	footer {
		padding: 0.6rem;
		overflow-y: auto;
		height: 100vh;
	}

	:global(.column::-webkit-scrollbar) {
		width: 0.2em;
	}
	:global(.column::-webkit-scrollbar-thumb) {
		background-color: black;
	}

	header {
		border-right: 1px solid black;
	}
	img {
		max-width: 250px;
	}
	@media (max-width: 1200px) {
		header,
		footer {
			border-bottom: 2px solid black;
			border-left: 1px solid black;
			margin: 0 0.5rem;
		}
		.layout-container {
			display: flex;
			flex-direction: column;
		}
	}
</style>
