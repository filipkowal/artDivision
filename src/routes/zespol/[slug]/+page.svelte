<script>
	import SectionHeader from '../../../components/SectionHeader.svelte';

	export let data;
	const { title, body, photo } = data;
</script>

<article class="column column-2 page-container">
	<SectionHeader title="Zespół" />
	<div class="content">
		<h1>{title}</h1>
		<div class="team-body">{@html body}</div>
		<img src={photo} alt={title} />
	</div>
</article>

<style>
	img {
		max-width: 300px;
		margin-top: 3rem;
	}
	.team-body {
		max-width: 600px;
	}
</style>
