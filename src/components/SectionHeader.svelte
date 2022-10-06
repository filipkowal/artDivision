<script>
	import BackButton from './BackButton.svelte';
	import SectionHeaderMobile from './SectionHeaderMobile.svelte';
	export let title, href;
</script>

<header>
	<a href="/"><div class="full-width-back"><BackButton /></div></a>

	{#if href}
		<a {href}><span class="header-title"><h2>{title}</h2></span></a>
	{:else}
		<span class="header-title"><h2>{title}</h2></span>
	{/if}
</header>
<SectionHeaderMobile {title} />

<style>
	header {
		display: flex;
		flex-direction: row;
		height: 76px;
	}
	@media (max-width: 1200px) {
		header {
			display: none;
		}
	}
	.header-title {
		margin-left: 0.4rem;
		z-index: 2;
		position: absolute;
		margin-left: 8.4px;
	}
	.header-title h2 {
		font-weight: 400;
		font-size: 1.7rem;
	}
	.full-width-back {
		width: 100%;
		position: absolute;
		left: 0;
		text-align: center;
	}
	:global(.full-width-back:hover svg) {
		stroke: #0000ff;
		color: #0000ff;
		fill: #0000ff;
	}
</style>
