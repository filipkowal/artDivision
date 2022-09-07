<div class="layout-container">
	<header><h1>Art Division</h1></header>
	<main><slot /></main>
	<footer><h1>Zespół</h1></footer>
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
		min-height: 100vh;
		overflow: auto;
	}
	@media (max-width: 1200px) {
		main {
			margin: 0 0.5rem;
			min-height: 0;
			border-left: 1px solid black;
			border-bottom: 2px solid black;
		}
	}

	.layout-container {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 1;
	}
	header,
	footer {
		border-right: 1px solid black;
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
