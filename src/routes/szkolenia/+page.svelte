<script>
	import Meta from '../../components/Meta.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';
	import SimpleCard from '../../components/SimpleCard.svelte';
	import SimpleCardWorkshop from '../../components/SimpleCardWorkshop.svelte';

	export let data;
</script>

<Meta />
<div class="column page-container">
	<SectionHeader title="Szkolenia" />
	<section class="workshops">
		{#each data.workshops as workshop}
			<SimpleCardWorkshop
				fileName={workshop.fileName}
				title={workshop.title}
				level={workshop.level}
			/>
		{/each}
	</section>
	<Pagination previousPageHref={data.previousPageHref} nextPageHref={data.nextPageHref} />
</div>

<style>
	.workshops {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0.7rem;
	}
	@media (max-width: 1200px) {
		.workshops {
			display: flex;
			flex-direction: column;
		}
	}
</style>
