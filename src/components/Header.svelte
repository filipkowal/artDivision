<script>
	import ContactPopup from './ContactPopupDesktop.svelte';

	export let onas;
</script>

<header class="column">
	<div class="column-content">
		<a href="/" class="link-home"><img src={onas.logo} alt="logo-art-division" class="logo" /></a>
		<img src={onas.thumbnail} alt="zespół" class="square" />
		<p>{@html onas.body}</p>
		<ContactPopup class="header-contact-button" />
	</div>
</header>

<style>
	.link-home img {
		filter: none;
		margin-bottom: calc(2rem - 2px);
	}
	header {
		border-right: 1px solid black;
		position: relative;
		padding-right: 1rem;
		padding-left: 1rem;
		overflow-y: auto;
		height: 100vh;
	}
	.logo {
		display: block;
		max-width: 20rem;
		height: 34px;
		margin-top: 1.13rem;
	}
	@media (max-width: 1200px) {
		header {
			border-bottom: 2px solid black;
			border-left: none;
			border-right: none;
			margin: 0;
			height: auto;
			overflow: visible;
		}

		:global(.header-contact-button) {
			display: none;
		}
		.logo {
			height: 2.4rem;
		}
	}
</style>
