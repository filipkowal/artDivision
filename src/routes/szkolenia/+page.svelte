<script>
	import SectionHeader from '../../components/SectionHeader.svelte';
	import SimpleCard from '../../components/SimpleCard.svelte';

	export let data;
	const { workshops } = data;
</script>

<div class="column page-container">
	<SectionHeader title="Szkolenia" />
	<section class="workshops">
		{#each workshops as workshop}
			<SimpleCard fileName={workshop.fileName} title={workshop.title} level={workshop.level} />
		{/each}
	</section>
</div>

<style>
	.workshops {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.6rem;
	}
</style>
