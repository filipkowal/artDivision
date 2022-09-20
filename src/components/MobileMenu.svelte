<script>
	import ContactPopup from './ContactPopup.svelte';
</script>

<div class="mobile-menu">
	<button class="mobile-menu-button">Menu</button>
	<ContactPopup class="mobile-menu-contact-button" />
</div>

<style>
	.mobile-menu {
		position: sticky;
		margin-left: auto;
		margin-right: auto;
		bottom: 4rem;
		display: flex;
		justify-content: space-between;
		width: 33rem;
		max-width: 100%;
	}
	@media (min-width: 1201px) {
		.mobile-menu {
			display: none;
		}
	}
	.mobile-menu-button {
		text-align: center;
		background-color: white;
	}
	:global(.mobile-menu-contact-button) {
		position: static !important;
		margin-left: 0 !important;
		margin-right: 0 !important;
	}
</style>
