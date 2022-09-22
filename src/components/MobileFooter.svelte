<script>
	import ContactData from './ContactData.svelte';
	export let logo;
</script>

<div class="mobile-footer">
	<div class="newsletter-section">
		<h2>Newsletter</h2>
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
		<h2>Kontakt</h2>
		<ContactData />
		<img src={logo} alt="logo-art-division" class="logo" />
	</div>
</div>

<style>
	.mobile-footer {
		display: none;
	}
	@media (max-width: 1200px) {
		.mobile-footer {
			display: block;
		}
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
		padding: 1rem;
		padding-top: 0;
	}
	:global(.mobile-footer .contact-section *) {
		color: black !important;
	}
	.newsletter-section {
		color: #0000ff;
		border-bottom: 1px solid #0000ff;
		border-top: 1px solid #0000ff;
		padding: 1rem;
		padding-bottom: 3rem;
	}
	.logo {
		width: 100%;
		display: block;
		max-width: 20rem;
		margin: 4rem auto;
	}
</style>
