<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	export let data;
	const { zespol, onas } = data;
</script>

<div class="layout-container">
	<Header {onas} />
	<main><slot /></main>
	<Footer {zespol} />
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
	:global(a:hover, a:hover div) {
		color: #0000ff;
		border-color: #0000ff;
	}
	:global(a:hover img) {
		filter: sepia(100%) hue-rotate(195deg) saturate(6);
	}
	:global(button) {
		border: 1px solid black;
		display: block;
		border-color: #0000ff;
		color: #0000ff;
		text-align: left;
		padding: 1rem;
		width: 15rem;
		font-weight: bold;
		background-color: inherit;
		margin-top: 1.6rem;
	}
	:global(button:hover) {
		cursor: pointer;
		box-shadow: -0.2rem 0.2rem 0.2rem #0000ff;
		transform: scale(1.01) translate(0.2rem, -0.2rem);
		transition: box-shadow 0.15s, translate 0.15s;
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
	@media (min-width: 1201px) {
		.layout-container {
			overflow: hidden;
			max-height: 100vh;
		}
	}

	:global(.column::-webkit-scrollbar) {
		width: 0.2em;
	}
	:global(.column::-webkit-scrollbar-thumb) {
		background-color: black;
	}
	:global(.column) {
		padding-top: 2rem;
	}

	@media (max-width: 1200px) {
		.layout-container {
			display: flex;
			flex-direction: column;
		}
	}

	:global(input, textarea) {
		border: 1px solid black;
		display: block;
		width: 85%;
		padding: 1rem;
	}
	:global(input:active, textarea:active) {
		border-color: #0000ff;
	}
	:global(input:not(:last-of-type)) {
		border-bottom: transparent;
	}
</style>
