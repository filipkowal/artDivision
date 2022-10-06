<script>
	export let metaDescription,
		title,
		path,
		author = null,
		date;
</script>

<svelte:head>
	<meta name="description" content={metaDescription} />
	<title>{title + ' - ArtDivision.pl – Doradztwo z zakresu Rynku sztuki'}</title>
	<meta name="robots" content="index, follow, max-image-preview:large" />
	{#if author}<meta name="author" content={author} />{/if}
	<meta property="og:locale" content="pl_PL" />
	<meta property="og:type" content="article" />
	<meta
		property="og:title"
		content={title + ' - ArtDivision.pl – Doradztwo z zakresu Rynku sztuki'}
	/>
	<meta property="og:description" content={metaDescription} />
	<meta property="og:url" content={`https://artdivision.pl/${path}`} />
	<meta property="og:site_name" content="ArtDivision.pl – Doradztwo z zakresu Rynku sztuki" />
	<meta property="article:publisher" content="https://www.facebook.com/artdivisionadvisory/" />
	{#if author}<meta
			property="article:author"
			content="https://www.facebook.com/artdivisionadvisory/"
		/>{/if}
	<meta property="article:published_time" content={date} />
</svelte:head>
