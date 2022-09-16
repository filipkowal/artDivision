<script>
	import BackButton from './BackButton.svelte';
	export let title;
</script>

<header>
	<div><h2 class="header-title">{title}</h2></div>
	<BackButton />
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
	}
	header > * {
		width: calc(50% - 1rem);
	}
	.header-title {
		font-weight: 400;
		font-size: 1.7rem;
	}
</style>
