<script>
	export let data;
	const { zespol, onas } = data;
</script>

<div class="layout-container">
	<header>
		<img src={onas.logo} alt="logo-art-division" />
		<img src={onas.thumbnail} alt="zespół" />
		<p>{@html onas.body}</p>
	</header>
	<main><slot {...data} /></main>
	<footer>
		<h1>Zespół</h1>
		{#each zespol as osoba}
			<li>
				<img src={osoba.photo} alt={osoba.title} />
				<a href="./zespol/{osoba.fileName}">{osoba.title}</a>
				<p>{@html osoba.body}</p>
			</li>
		{/each}
	</footer>
</div>

<style>
	:root {
		font-family: Neue Haas Unica Pro, sans-serif;
	}
	:global(h1) {
		font-weight: 400;
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
