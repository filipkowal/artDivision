<script>
	export let name;
</script>

<form method="POST" {name} data-netlify="true">
	<input type="hidden" name="form-name" value={name} />
	<input type="hidden" name="subject" value={name} />

	<input required type="text" name="name" placeholder="Imię i nazwisko" />
	<input required type="email" name="email" placeholder="Adres email" />
	<input type="phone" name="phone" placeholder="Numer telefonu (opcjonalnie)" />
	<textarea name="message" placeholder="Wiadomość..." rows="10" />

	<button type="submit">Wyślij</button>
</form>

<style>
	textarea {
		margin-top: 1.6rem;
	}
</style>
