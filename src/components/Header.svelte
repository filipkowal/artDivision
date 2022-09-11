<script>
	import ContactPopup from './ContactPopup.svelte';

	export let onas;
</script>

<header class="column">
	<a href="/" class="link-home"><img src={onas.logo} alt="logo-art-division" /></a>
	<img src={onas.thumbnail} alt="zespół" />
	<p>{@html onas.body}</p>
	<ContactPopup />
</header>

<style>
	.link-home img {
		filter: none;
		margin-bottom: 2rem;
	}
	img {
		max-width: 100%;
	}
	header {
		border-right: 1px solid black;
		position: relative;
		padding-right: 1rem;
		padding-left: 1rem;
		overflow-y: auto;
		height: 100vh;
	}
	@media (max-width: 1200px) {
		header {
			border-bottom: 2px solid black;
			border-left: 1px solid black;
			margin: 0 0.5rem;
		}
	}
</style>
