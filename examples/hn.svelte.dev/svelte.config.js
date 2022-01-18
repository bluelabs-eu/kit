import netlify from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: netlify(),
		target: '#svelte',
		legacy: {
			targets: ['defaults', 'not IE 11'],
			additionalLegacyPolyfills: [
				'custom-event-polyfill',
				'core-js/modules/es.promise.js',
				'whatwg-fetch',
				'regenerator-runtime/runtime'
			]
		},
		vite: {
			build: {
				minify: false
			}
		}
	}
};
