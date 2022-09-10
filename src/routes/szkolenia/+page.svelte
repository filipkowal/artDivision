<script>
	import SimpleCard from '../../components/SimpleCard.svelte';

	export let data;
	const { workshops } = data;
</script>

<div class="workshops-container">
	<h1>Szkolenia</h1>
	<section class="workshops">
		{#each workshops as workshop}
			<SimpleCard fileName={workshop.fileName} title={workshop.title} level={workshop.level} />
		{/each}
	</section>
</div>

<style>
	.workshops-container {
		padding: 0.6rem;
	}
	.workshops {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.6rem;
	}
</style>
