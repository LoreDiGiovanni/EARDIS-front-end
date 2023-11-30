import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	    alias: {
			'@routes': '/src/routes',
			'@': '/src'
		},
		adapter: adapter()
	}
};

export default config;
