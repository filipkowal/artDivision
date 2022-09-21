<script>
	import ContactData from './ContactData.svelte';

	export let setOpenMenu = () => {};
</script>

<div class="contact-popup">
	<div class="newsletter-section">
		<b>Newsletter</b>
		<form method="POST" name="newsletter" class="contact-form" data-netlify="true" action="/sukces">
			<input type="hidden" name="form-name" value="newsletter" />
			<input type="hidden" name="subject" value="newsletter" />

			<input type="text" name="name" placeholder="Imię i nazwisko" />
			<input type="email" name="email" placeholder="Adres email" required />
			<p>
				Przechodząc dalej, akceptujesz naszą <a class="privacy" href="/polityka-prywatnosci"
					>politykę prywatności.</a
				>
			</p>
			<button type="submit">Zapisz się</button>
		</form>
	</div>
	<div class="contact-section">
		<b>Kontakt</b>
		<ContactData />
		<a href="/kontakt" on:click={() => setOpenMenu(null)}
			><button>Otwórz formularz kontaktowy</button></a
		>
	</div>
	<div class="buttons">
		<button class="close-button" on:click={() => setOpenMenu(null)}>Zamknij</button>
		<button on:click={() => setOpenMenu('menu')}>Menu</button>
	</div>
</div>

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.close-button {
		background-color: #0000ff;
		color: white;
	}
	.buttons > button {
		max-width: 45%;
		margin: initial 0;
	}
	.contact-popup {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		border: 2px solid #0000ff;
		background-color: white;
		padding: 1rem;
		width: 94%;
		color: #0000ff;
	}
	@media (max-width: 1200px) {
		.contact-popup {
			max-width: 90%;
		}
	}
	.contact-popup button {
		width: 100%;
		text-align: center;
	}
	input {
		border-color: #0000ff;
		color: #0000ff;
	}
	input::placeholder {
		color: #0000ff;
	}
	.privacy {
		text-decoration: underline;
	}
	.contact-form {
		margin-top: 1.5rem;
	}
	.contact-section {
		margin-top: 2rem;
	}
</style>
