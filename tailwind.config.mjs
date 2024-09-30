/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      secondary: ["Geist Sans", "sans-serif;"],
    },
    extend: {
      colors: {
        secondary: "#d1b000",
      },
      backgroundColor: {
        secondary: "#d1b000",
      },
    },
  },
  plugins: [],
};
