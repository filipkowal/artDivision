<script>
	import BackButton from './BackButton.svelte';
	import SectionHeaderMobile from './SectionHeaderMobile.svelte';
	export let title;
</script>

<header>
	<div><h2 class="header-title">{title}</h2></div>
	<a href="/"><div class="full-width"><BackButton /></div></a>
</header>
<SectionHeaderMobile {title} />

<style>
	header {
		display: flex;
		flex-direction: row;
	}
	@media (max-width: 1200px) {
		header {
			display: none;
		}
	}
	header > * {
		width: calc(50% - 1rem);
	}
	.header-title {
		font-weight: 400;
		font-size: 1.7rem;
		margin-left: 0.4rem;
	}
	.full-width {
		width: 100%;
	}
</style>
