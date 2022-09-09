<script>
	export let data;
	const posts = Object.values(data);
</script>

<section class="articles">
	<h1>Artykuły</h1>
	<ul>
		{#each posts as post}
			<li>
				<a href="./artykuly/{post.fileName}">{post.title}</a>
			</li>
		{/each}
	</ul>
</section>
