/** @type {import('tailwindcss').Config}*/
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif", "system-ui"]
			},
			backgroundColor: {
				primary: "var(--brand-primary)"
			},
			colors: {
				primary: "var(--brand-primary)",
				secondary: "var(--brand-secondary)",
			}
		}
	},

	plugins: []
};
