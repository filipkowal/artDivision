<script>
	import SimpleCard from './SimpleCard.svelte';

	export let title, fileName;
</script>

<a href={`./oferta/${fileName}`}>
	<SimpleCard {title}>więcej</SimpleCard>
</a>
