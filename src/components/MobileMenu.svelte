<script>
	import ContactPopup from './ContactPopup.svelte';

	let openMenu = '';
	$: isMenuOpen = openMenu === 'menu';
	$: isContactOpen = openMenu === 'contact';

	const setOpenMenu = (s) => (openMenu = s);
</script>

<div class="mobile-menu">
	<button class="mobile-menu-button" on:click={() => setOpenMenu('menu')}>Menu</button>
	{#if isMenuOpen}
		<div class="mobile-menu-popup">
			<h2><a href="/#onas" on:click={() => setOpenMenu(null)}>O nas</a></h2>
			<h2><a href="/artykuly" on:click={() => setOpenMenu(null)}>Artykuły</a></h2>
			<h2><a href="/oferta" on:click={() => setOpenMenu(null)}>Oferta</a></h2>
			<h2><a href="/szkolenia" on:click={() => setOpenMenu(null)}>Szkolenia</a></h2>
			<h2><a href="/#zespol" on:click={() => setOpenMenu(null)}>Zespoł</a></h2>
			<div class="buttons">
				<button class="close-button" on:click={() => setOpenMenu(null)}>Zamknij</button>
				<button on:click={() => setOpenMenu('contact')}>Kontakt</button>
			</div>
		</div>
	{/if}

	<button class="mobile-menu-contact-button " on:click={() => setOpenMenu('contact')}
		>Kontakt</button
	>
	{#if isContactOpen}
		<ContactPopup {setOpenMenu} />
	{/if}
</div>

<style>
	.mobile-menu {
		position: sticky;
		margin-left: auto;
		margin-right: auto;
		bottom: 2rem;
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
	.mobile-menu-popup {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%) translateY(1rem);
		border: 2px solid #0000ff;
		background-color: white;
		padding: 1rem;
		width: 93%;
		color: #0000ff;
		text-align: center;
		max-width: 90%;
	}
	.mobile-menu-popup button {
		max-width: 49%;
		display: inline-block;
	}
	.mobile-menu-button {
		max-width: 45%;
		margin-left: 1rem;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.close-button {
		background-color: #0000ff;
		color: white;
	}
	.mobile-menu-contact-button {
		position: static;
		margin-left: 0;
		margin-right: 1rem;
		max-width: 45%;
	}
</style>
