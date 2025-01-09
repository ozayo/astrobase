

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [
    require('daisyui'),
    require("tailwindcss"),
  ],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  // ...
};
