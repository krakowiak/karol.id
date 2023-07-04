/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi-Variable', 'sans-serif'],
				heading: ['CabinetGrotesk-Variable', 'sans-serif'],
			},
			colors: {
				'brand': '#1F01B9',
				'twitter': '#1DA1F2',
				'instagram': '#E1306C',
				'linkedin': '#2867B2',
				'github': '#181717',
				'youtube': '#FF0000',
				'facebook': '#1877F2',
				'behance': '#1769FF',
				'dribbble': '#EA4C89',
				'vimeo': '#1AB7EA',
				'ladniejszyinternet': '#F8D20F',
			},
		},
	},
	plugins: [],
}
