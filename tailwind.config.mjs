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
        primary: "#fff",
        secondary: "#d1b000",
        tertiary: "#f1f7fecf",
        titles: "#dfdfdfef",
        paragraph: " #f1f7feb5",
      },
      backgroundColor: {
        secondary: "#d1b000",
      },
    },
  },
  plugins: [],
};
