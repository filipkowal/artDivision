<script>
	import Meta from '../../components/Meta.svelte';
	import PageTransition from '../../components/PageTransition.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';

	export let data;
</script>

<Meta path="polityka-prywatnosci" />
<PageTransition>
	<div class="page-container column">
		<SectionHeader title="Polityka prywatności" />
		<div class="content">
			<div class="contact-data">{@html data.body}</div>
		</div>
	</div>
</PageTransition>
