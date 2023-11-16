/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bkg: 'rgb(var(--color-bkg) / <alpha-value>)',
				fg: 'rgb(var(--color-fg) / <alpha-value>)'
			}
		}
	},
	plugins: []
};
