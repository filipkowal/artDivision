<script>
	export let zespol;
</script>

<footer class="column column-5">
	<div class="column-content">
		<h1 class="section-title">Zespół</h1>
		{#each zespol as osoba}
			<div>
				<a href="/zespol/{osoba.fileName}">
					<h3>{osoba.title}</h3>
					<img
						src={osoba.photo + '?nf_resize=smartcrop&w=350&h=350'}
						alt={osoba.title}
						class="square"
					/>
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
	h1 {
		font-weight: 400;
		font-size: 1.7rem;
	}
	@media (max-width: 1200px) {
		h1 {
			font-size: 2.15rem;
		}
	}
	h3 {
		font-size: 1.3rem;
	}
	@media (max-width: 1200px) {
		footer {
			border-top: 2px solid black;
			height: auto;
			padding-top: 0;
			overflow: visible;
		}
		.section-title {
			margin-top: 0.5rem;
			margin-bottom: 2.5rem;
			font-weight: 600;
		}
	}
</style>
