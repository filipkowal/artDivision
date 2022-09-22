<script>
	import SimpleCard from './SimpleCard.svelte';

	export let title, fileName;
</script>

<a href={`/oferta/${fileName}`} class="simple-card-offer">
	<SimpleCard {title}>więcej</SimpleCard>
</a>

<style>
	:global(.simple-card-offer p) {
		margin-top: 3rem;
	}
</style>
