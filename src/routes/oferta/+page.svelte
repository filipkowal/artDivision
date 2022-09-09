<script>
	export let data;
	const posts = Object.values(data);
</script>

<section class="articles">
	<h1>Oferta</h1>
	<ul>
		{#each posts as post}
			<li>
				<a href="./oferta/{post.fileName}">{post.title}</a>
			</li>
		{/each}
	</ul>
</section>
