<script>
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import Meta from '../../../components/Meta.svelte';

	export let data;
</script>

<Meta title={data.title} path={data.path} metaDescription={data.metaDescription} date={data.date} />
<article class="column column-2 page-container">
	<SectionHeader title="Zespół" />
	<div class="content">
		<h1>{data.title}</h1>
		<div class="team-body">{@html data.body}</div>
		<img src={data.photo} alt={data.title} />
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
