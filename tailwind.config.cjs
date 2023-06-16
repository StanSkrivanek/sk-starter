// CUSTOMIZE TAILWIND CONFIG HERE
// https://tailwindcss.com/docs/configuration

/** @type {import('tailwindcss').Config}*/
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif", "system-ui"]
			},

			colors: {
				// allow set color with the alpha value (optional) e.g. `bg-brandcolor` mean opacity 1 or `bg-brandcolor/50` mean opacity 0.5
				brandColor: "hsl(var(--color-brand) / <alpha-value>)",
				textColor: "hsl(var(--color-text) / <alpha-value>)",
				primaryColor: "hsl(var(--color-primary) / <alpha-value>)",
				secondaryColor: "hsl(var(--color-secondary) / <alpha-value>)",

				bgColor: "hsl(var(--color-background) / <alpha-value>)",
				neutralColor: "hsl(var(--color-neutral) / <alpha-value>)",

				brand: {
					50: "#FEF6F6",
					100: "#FDF1F1",
					200: "#FBDFDF",
					300: "#F9C8C9",
					400: "#F6B1B2",
					500: "#F39A9C",
					600: "#EF7678",
					base: "#E94043",
					800: "#CE181B",
					900: "#971114",
					950: "#720D0F"
				},
				gray: {
					50: "#FBFCFD",
					100: "#FBFCFD",
					200: "#FBFCFD",
					base: "#F8FAFC",
					400: "#E2EBF3",
					500: "#C9D9E8",
					600: "#ADC4DC",
					700: "#90B0D0",
					800: "#6591BD",
					900: "#406B96",
					950: "#2E4D6B"
				}
			}
		}
	},

	plugins: []
};
