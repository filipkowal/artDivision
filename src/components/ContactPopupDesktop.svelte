<script>
	import ContactData from './ContactData.svelte';
</script>

<button class="contact-button {$$props.class}">Kontakt</button>
<div class="contact-popup">
	<div class="newsletter-section">
		<b>Newsletter</b>
		<form method="POST" name="newsletter" class="contact-form" data-netlify="true" action="/sukces">
			<input type="text" name="name" placeholder="Imię i nazwisko" autocomplete="off" />
			<input type="email" name="email" placeholder="Adres email" required autocomplete="off" />
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
		<a href="/kontakt"><button>Otwórz formularz kontaktowy</button></a>
	</div>
</div>

<style>
	.contact-popup {
		display: none;
		bottom: 4rem;
		position: sticky;
		margin-left: auto;
		margin-right: auto;
		border: 2px solid #0000ff;
		background-color: white;
		padding: 1rem;
		width: 80%;
		color: #0000ff;
	}
	.contact-button {
		text-align: center;
		position: sticky;
		margin-left: auto;
		margin-right: auto;
		bottom: 4rem;
		background-color: white;
	}
	.contact-popup button {
		width: 100%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}
	.contact-button:hover + .contact-popup,
	.contact-popup:hover,
	.contact-popup:active,
	.contact-popup:target,
	.contact-popup *:active,
	.contact-popup *:focus,
	.contact-popup *:target,
	.contact-popup:focus {
		display: block;
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
