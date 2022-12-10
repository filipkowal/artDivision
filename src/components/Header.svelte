<script>
	import ContactPopup from './ContactPopupDesktop.svelte';

	export let onas;
</script>

<header class="column">
	<div class="column-content">
		<a href="/" class="link-home"
			><img src={onas.logo + '?nf_resize=fit&h=34'} alt="logo-art-division" class="logo" /></a
		>
		<img src={onas.thumbnail + '?nf_resize=smartcrop&w=350&h=350'} alt="zespół" class="square" />
		<p>{@html onas.body}</p>
	</div>
	<ContactPopup class="header-contact-button" />
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
