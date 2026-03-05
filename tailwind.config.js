/** @type {import('tailwindcss').Config} */

const { light, dark } = require("./theme/colors");

module.exports = {

  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        //defauld light mode colors
        ...light,

        // dart mode colors

        darkBackground: dark.background,
        darkPrimary: dark.primary,
        darkSecondary: dark.secondary,
        darkCard: dark.card,
        darkBorder: dark.border,
        darkTextPrimary: dark.textPrimary,
        darkTextSecondary: dark.textSecondary,
      },
    },
  },
  plugins: [],
}