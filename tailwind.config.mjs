/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      secondary: ["Geist Sans", "sans-serif;"],
    },
    extend: {
      maxWidth: {
        maxwidth: "1100px",
      },
      colors: {
        secondary: "#d1b000",
        tertiary: "#f1f7fecf",
      },
      backgroundColor: {
        secondary: "#d1b000",
      },
    },
  },
  plugins: [],
};
