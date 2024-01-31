/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', 'sans-serif'],
                heading: ['Bricolage Grotesque', 'sans-serif'],
            },
            colors: {
                'brand': '#1F01B9',
                'ladniejszyinternet': '#F8D20F',
            },
            screens: {
                'xs': '320px',
            }
        },
    },
    plugins: [],
}
