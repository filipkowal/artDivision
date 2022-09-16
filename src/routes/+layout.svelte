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
	@font-face {
		font-family: 'Neue Haas Unica Pro';
		src: url('/fonts/NeueHaasUnicaRegular.woff2') format('woff2'),
			url('/fonts/NeueHaasUnicaRegular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'Neue Haas Unica Pro';
		src: url('/fonts/NeueHaasUnicaMedium.woff2') format('woff2'),
			url('/fonts/NeueHaasUnicaMedium.woff') format('woff');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'Neue Haas Unica Pro';
		src: url('/fonts/NeueHaasUnicaBold.woff2') format('woff2'),
			url('/fonts/NeueHaasUnicaBold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: 'NewsPlantinItalic';
		src: url('/fonts/NewsPlantinItalic.woff2') format('woff2'),
			url('/fonts/NewsPlantinItalic.woff') format('woff'),
			url('/fonts/NewsPlantinItalic.ttf') format('truetype');
		font-weight: 400;
		font-style: italic;
	}
	:root {
		font-family: 'Neue Haas Unica Pro', sans-serif;
		font-size: 14px;
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
	:global(.square) {
		width: 100%;
		max-width: 25rem;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
	}
	:global(.page-container) {
		padding: 2rem 0.6rem;
		overflow: auto;
		height: 100vh;
	}
	:global(.non-article-content) {
		margin: 1rem 0;
		border: 2px solid black;
		padding: 2rem;
	}
	:global(.non-article-content h1:first-of-type) {
		font-size: 4.3rem;
		line-height: 5rem;
		margin-top: 0;
	}
	:global(.non-article-content p, .non-article-content li) {
		font-size: 1.2rem;
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
