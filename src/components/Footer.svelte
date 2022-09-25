<script>
	export let zespol;
</script>

<footer class="column column-5">
	<div class="column-content">
		<h2 class="section-title">Zespół</h2>
		{#each zespol as osoba}
			<div>
				<a href="/zespol/{osoba.fileName}">
					<h3>{osoba.title}</h3>
					<img src={osoba.photo} alt={osoba.title} class="square" />
				</a>
				<p>{@html osoba.body}</p>
			</div>
		{/each}
	</div>
</footer>

<style>
	footer {
		padding-right: 1rem;
		padding-left: 1rem;
		overflow-y: auto;
		height: 100vh;
	}
	h2 {
		font-weight: 400;
		font-size: 1.7rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	@media (max-width: 1200px) {
		footer {
			border-top: 2px solid black;
			height: auto;
			padding-top: 0;
		}
		.section-title {
			margin-top: 0.5rem;
			margin-bottom: 2.5rem;
			font-weight: 600;
		}
	}
</style>
