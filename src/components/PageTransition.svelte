<script>
	import { fade } from 'svelte/transition';
	import DeviceDetector from 'svelte-device-detector';
</script>

<DeviceDetector showInDevice="desktop">
	<div out:fade={{ duration: 250 }} class="desktop">
		<slot />
	</div>
</DeviceDetector>

<div class="mobile">
	<slot />
</div>

<style>
	@media (max-width: 1200px) {
		.mobile {
			display: block;
		}
		.desktop {
			display: none;
		}
	}
	@media (min-width: 1201px) {
		.mobile {
			display: none;
		}
		.desktop {
			display: block;
		}
	}
</style>
