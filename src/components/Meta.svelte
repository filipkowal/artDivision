<script>
	export let metaDescription = 'Buduj kolekcję dzieł sztuki świadomie',
		title = null,
		path = '',
		author = null,
		date = null;
</script>

<svelte:head>
	<meta name="description" content={metaDescription} />
	{#if title}
		<title>{title + ' - ArtDivision.pl – Doradztwo z zakresu Rynku sztuki'}</title>
	{:else}
		<title>{'ArtDivision.pl – Doradztwo z zakresu Rynku sztuki'}</title>
	{/if}
	<meta name="robots" content="index, follow, max-image-preview:large" />
	{#if author}<meta name="author" content={author} />{/if}
	<meta property="og:locale" content="pl_PL" />
	<meta property="og:type" content="article" />
	{#if title}
		<meta
			property="og:title"
			content={title + ' - ArtDivision.pl – Doradztwo z zakresu Rynku sztuki'}
		/>
	{:else}
		<meta property="og:title" content={'ArtDivision.pl – Doradztwo z zakresu Rynku sztuki'} />
	{/if}
	<meta property="og:description" content={metaDescription} />
	<meta property="og:url" content={`https://artdivision.pl/${path}`} />
	<meta property="og:site_name" content="ArtDivision.pl – Doradztwo z zakresu Rynku sztuki" />
	<meta property="article:publisher" content="https://www.facebook.com/artdivisionadvisory/" />
	{#if author}
		<meta property="article:author" content="https://www.facebook.com/artdivisionadvisory/" />
	{/if}
	{#if date}<meta property="article:published_time" content={date} />{/if}
</svelte:head>
