import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as mdPlugin } from 'vite-plugin-markdown';

const config = {
	plugins: [sveltekit(), mdPlugin({ mode: 'html' })],
	ssr: {
		noExternal: ['devalue']
	}
};

export default config;
