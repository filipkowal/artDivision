<script>
	export let name;
</script>

<form method="POST" name="netlify-form-example" data-netlify="true">
	<input type="hidden" name="form-name" value="netlify-form-example" />
	<input type="hidden" name="subject" value="netlify-form-example" />
	<input type="text" name="name" placeholder="Imię i nazwisko" />
	<input type="email" name="email" placeholder="Adres email" />
	<input type="phone" name="phone" placeholder="Numer telefonu (opcjonalnie)" />
	<textarea name="message" placeholder="Wiadomość..." rows="10" />
	<button type="submit">Wyślij</button>
</form>

<style>
	input,
	textarea {
		border: 1px solid black;
		display: block;
		width: 100%;
		padding: 1rem;
	}
	input:active,
	textarea:active {
		border-color: #0000ff;
	}
	input:not(:last-of-type) {
		border-bottom: none;
	}

	textarea {
		margin-top: 1.6rem;
	}
	button {
		border: 1px solid black;
		display: block;
		border-color: #0000ff;
		color: #0000ff;
		text-align: left;
		padding: 1rem;
		width: 15rem;
		font-weight: bold;
		background-color: inherit;
		margin-top: 1.6rem;
	}
	button:hover {
		cursor: pointer;
		box-shadow: -0.2rem 0.2rem 0.2rem #0000ff;
		transform: scale(1.01) translate(0.2rem, -0.2rem);
		transition: box-shadow 0.15s, translate 0.15s;
	}
</style>
