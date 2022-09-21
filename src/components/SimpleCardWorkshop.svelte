<script>
	import SimpleCard from './SimpleCard.svelte';

	export let title,
		level = null,
		fileName;
</script>

<a href={`./szkolenia/${fileName}`}>
	<SimpleCard {title}><span class="level">{level}</span></SimpleCard>
</a>

<style>
	.level {
		color: #0000ff;
	}
</style>
