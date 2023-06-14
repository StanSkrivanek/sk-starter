/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif', 'system-ui']
			}
		}
	},

	plugins: []
};

module.exports = config;
