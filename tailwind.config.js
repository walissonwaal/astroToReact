/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'off-white': '#EFEFEF',
      'off-black': '#323232',
    },
    extend: {
      fontFamily: {
        brutalno1: ['BrutalMilkNo1', 'sans-serif'],
        brutalno2: ['BrutalMilkNo2', 'sans-serif'],
        elgraineItalic: ['ElgraineItalic', 'sans-serif'],
        elgraineRegular: ['ElgraineRegular', 'sans-serif'],
        nordMedium: ['NORDMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
