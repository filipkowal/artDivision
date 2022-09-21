<script>
	import LogoMobile from './LogoMobile.svelte';

	export let title;
</script>

<header>
	<a href="/">
		<LogoMobile />
		<div><h2 class="header-title">{title}</h2></div>
	</a>
</header>

<style>
	header {
		display: none;
		flex-direction: row;
	}
	@media (max-width: 1200px) {
		header {
			display: flex;
		}
	}
	header > * {
		width: calc(50% - 1rem);
	}
	.header-title {
		font-weight: 400;
		font-size: 1.7rem;
	}
	a {
		display: flex;
		align-items: baseline;
		padding-left: 1rem;
	}
</style>
