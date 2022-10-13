<script>
	import { browser } from '$app/environment';

	let showCookiePopup = browser ? window.sessionStorage.getItem('showCookiePopup') ?? true : false;

	const hideCookiePopup = () => browser && window.sessionStorage.setItem('showCookiePopup', false);
</script>

{#if true}
	<div class="cookie-popup column column-3">
		<p>Ciasteczka</p>
		<p>
			Ta strona wykorzystuje pliki cookies w celu usprawnienia jej przeglądania oraz prawidłowego
			świadczenia usług, zgodnie z <a href="/polityka-prywatnosci">Polityką prywatności</a>.
		</p>
		<button on:click={hideCookiePopup}>Rozumiem</button>
	</div>
{/if}

<style>
	.cookie-popup {
		bottom: 17px;
		position: sticky;
		border: 2px solid #0000ff;
		background-color: white;
		padding: 1rem;
		color: #0000ff;
		margin-left: 8.4px;
		width: 300px;
	}
	.cookie-popup p:first-of-type {
		margin-top: 0;
	}
	.cookie-popup a {
		text-decoration: underline;
	}
	.cookie-popup button {
		width: 100%;
	}
</style>
