<script>
	import PageTransition from '../components/PageTransition.svelte';
	import SectionHeader from '../components/SectionHeader.svelte';
	import Meta from '../components/Meta.svelte';
</script>

<Meta />
<PageTransition>
	<div class="page-container column">
		<SectionHeader title="404" />
		<div class="content">
			<h1>Strona nie istnieje</h1>
			<h2><a href="/">Wróć do strony głównej</a></h2>
		</div>
	</div>
</PageTransition>
