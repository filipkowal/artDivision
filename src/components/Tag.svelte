<script>
	export let tag;
</script>

<div class="tag"><p>{tag}</p></div>

<style>
	.tag {
		text-align: center;
		border-collapse: collapse;
		box-shadow: 2px 0 0 0 black, 0 2px 0 0 black, 2px 2px 0 0 black, 2px 0 0 0 black inset,
			0 2px 0 0 black inset;
	}
	.tag p {
		margin: 0 1rem;
		padding: 0.25rem 0;
		color: black;
	}
</style>
