<script>
	export let previousPageHref, nextPageHref;
</script>

<div class={`pagination ${nextPageHref ? '' : 'last'}`}>
	{#if nextPageHref}
		<a href={nextPageHref} class="older"><button>Starsze</button></a>
	{/if}
	{#if previousPageHref}
		<a href={previousPageHref} class="newer"><button> Nowsze</button></a>
	{/if}
</div>

<style>
	.pagination {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		flex-basis: 0;
		margin: 0 8.4px 17px 8.4px;
	}
	.older,
	.newer {
		width: calc(33% - 6px);
	}
	button {
		width: 100%;
	}
</style>
