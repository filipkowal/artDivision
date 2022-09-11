<script>
	export let tag;
</script>

<div class="tag"><p>{tag}</p></div>

<style>
	.tag {
		border: 2px solid black;
		text-align: center;
	}
	.tag:not(:last-of-type) {
		border-bottom: 1px solid black;
	}
	.tag p {
		margin: 0.6rem 1rem;
	}
</style>
