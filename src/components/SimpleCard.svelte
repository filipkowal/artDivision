<script>
	export let title;
</script>

<div class="simpleCard">
	<h2 class="title">{title}</h2>
	<p class="footer">
		<slot />
	</p>
</div>

<style>
	.simpleCard {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		border: 2px solid black;
		padding: 0 12px;
		margin-bottom: 0.7rem;
	}
	.simpleCard:hover {
		border-color: #0000ff;
	}
	h2 {
		font-weight: 500;
		font-size: 1.57rem;
		font-family: 'Neue Haas Unica Pro';
		line-height: 2rem;
		margin-top: 10px;
	}
</style>
