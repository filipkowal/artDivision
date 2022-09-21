<script>
	export let previousPageHref, nextPageHref;
</script>

<div class={`pagination ${nextPageHref ? '' : 'last'}`}>
	{#if nextPageHref}
		<a href={nextPageHref} class="older"
			><button>Starsze <span class="arrow">&rarr;</span></button></a
		>
	{/if}
	{#if previousPageHref}
		<a href={previousPageHref}
			><button>
				<span class="arrow">&larr;</span>
				Nowsze</button
			></a
		>
	{/if}
</div>

<style>
	.pagination {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-bottom: 4rem;
	}
	.pagination.last {
		flex-direction: row;
	}
	a {
		max-width: 48%;
	}
	button {
		max-width: 100%;
	}
	.arrow {
		font-size: 1.5rem;
		line-height: 0.5rem;
	}
</style>
