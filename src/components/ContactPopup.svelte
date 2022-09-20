<script>
	import ContactData from './ContactData.svelte';
</script>

<button class="contact-button">Kontakt</button>
<div class="contact-popup">
	<div class="newsletter-section">
		<b>Newsletter</b>
		<form method="post" name="newsletter" class="contact-form" netlify>
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
		<a href="/kontakt"><button>Otwórz formularz kontaktowy</button></a>
	</div>
</div>

<style>
	.contact-popup {
		display: none;
		position: absolute;
		bottom: 4rem;
		left: 50%;
		transform: translateX(-50%);
		border: 2px solid #0000ff;
		background-color: white;
		padding: 1rem;
		width: 80%;
		color: #0000ff;
	}
	.contact-button {
		text-align: center;
		position: absolute;
		bottom: 4rem;
		background-color: white;
		left: 50%;
		transform: translateX(-50%);
	}
	.contact-popup button {
		width: 100%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}
	.contact-button:hover + .contact-popup,
	.contact-popup:hover {
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
