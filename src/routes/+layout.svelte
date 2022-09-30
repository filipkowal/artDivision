<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import MobileMenu from '../components/MobileMenu.svelte';

	export let data;
	const { zespol, onas } = data;
</script>

<div class="layout-container">
	<div class="hide-on-mobile">
		<Header {onas} />
	</div>

	<main><slot /></main>

	<div class="hide-on-mobile">
		<Footer {zespol} />
	</div>
	<MobileMenu />
</div>

<style>
	@font-face {
		font-family: 'Neue Haas Unica Pro';
		src: url('/fonts/NeueHaasUnicaRegular.woff2') format('woff2'),
			url('/fonts/NeueHaasUnicaRegular.woff') format('woff'),
			url('/fonts/NeueHaasUnicaRegular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'Neue Haas Unica Pro';
		src: url('/fonts/NeueHaasUnicaMedium.woff2') format('woff2'),
			url('/fonts/NeueHaasUnicaMedium.woff') format('woff'),
			url('/fonts/NeueHaasUnicaMedium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'Neue Haas Unica Pro';
		src: url('/fonts/NeueHaasUnicaBold.woff2') format('woff2'),
			url('/fonts/NeueHaasUnicaBold.woff') format('woff'),
			url('/fonts/NeueHaasUnicaBold.ttf') format('truetype');
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
	:global(h1) {
		font-size: 4.2rem;
		font-weight: 400;
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
		text-align: center;
		background-color: white;
		transition: color 0.15s, background-color 0.15s;
	}
	:global(button:hover) {
		cursor: pointer;
		background-color: #0000ff;
		color: white;
	}
	:global(.square) {
		width: 100%;
		max-width: 25rem;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
	}
	@media (max-width: 1200px) {
		:global(.square) {
			width: calc(100% + 3.1rem);
			margin-left: -1.54rem;
			max-width: none;
		}
	}
	:global(.page-container) {
		padding: 0 0.6rem;
		overflow-y: auto;
		height: 100vh;
	}
	@media (max-width: 1200px) {
		:global(.page-container) {
			height: auto;
			padding-top: 0.5rem !important;
			margin-top: 0;
		}
	}
	:global(.content) {
		margin: 0 0 2.5rem 0;
		border: 2px solid black;
		padding: 1.3rem 2rem 2rem 2rem;
	}
	:global(.content .header) {
		margin-bottom: 60px;
	}
	:global(.content .header h1) {
		margin-bottom: 0;
	}
	:global(.content .body p) {
		max-width: 600px;
	}
	:global(.content .body a) {
		font-weight: bold;
	}
	@media (max-width: 1200px) {
		:global(.content) {
			margin: 0;
			border: none;
			padding: 0.5rem;
			padding-bottom: 2rem;
		}
	}
	:global(.content h1:first-of-type) {
		font-size: 4.3rem;
		line-height: 5rem;
		margin-top: 0;
	}
	@media (max-width: 1200px) {
		:global(.content h1:first-of-type) {
			font-size: 2.5rem;
			line-height: 2.6rem;
			overflow-wrap: break-word;
		}
		:global(.content li) {
			margin-left: -1rem;
		}
		:global(.content button) {
			width: 100%;
		}
	}
	:global(.content p, .content li) {
		font-size: 1.2rem;
	}
	main {
		border-right: 1px solid black;
	}
	@media (max-width: 1200px) {
		main {
			margin: 0 0.5rem 1rem 0.5rem;
			border-left: 1px solid black;
			border-bottom: 1px solid black;
		}
		.hide-on-mobile {
			display: none;
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

	@keyframes slideIn {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	:global(.column) {
		transform: translateY(100%);
		opacity: 0;
		animation: 0.8s ease-in-out slideIn forwards;
	}
	:global(.column-2) {
		animation-delay: 0.1s;
	}
	:global(.column-3) {
		animation-delay: 0.2s;
	}
	:global(.column-4) {
		animation-delay: 0.3s;
	}
	:global(.column-5) {
		animation-delay: 0.4s;
	}

	:global(*::-webkit-scrollbar) {
		width: 0.1rem;
	}
	:global(*::-webkit-scrollbar-thumb) {
		background: rgba(255, 255, 255, 0);
	}
	:global(*:hover::-webkit-scrollbar-thumb) {
		background: black;
	}

	:global(.column-content) {
		padding-bottom: 3rem;
	}

	@media (max-width: 1200px) {
		.layout-container {
			display: flex;
			flex-direction: column;
		}
	}

	:global(input, textarea) {
		border: 1px solid black;
		border-radius: 0;
		display: block;
		width: 100%;
		box-sizing: border-box;
		padding: 1rem;
		font-family: 'Neue Haas Unica Pro';
		-webkit-appearance: none;
		appearance: none;
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) and (max-width: 1200px) {
		:global(input, textarea) {
			font-size: 16px;
		}
	}
	:global(input:active, textarea:active) {
		border-color: #0000ff;
	}
	:global(input:not(:last-of-type)) {
		border-bottom: rgba(255, 255, 255, 0);
	}
	:global(input:focus-visible, textarea:focus-visible) {
		outline: 0;
	}
</style>
