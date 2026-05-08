/** @type {import('tailwindcss').Config} */

const { light, dark } = require("./theme/colors");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./fonts/**/*.{js,jsx,ts,tsx}",
    "./theme/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        //system detected default mode
        //light mode colors
        ...light,

        // dark mode colors

        darkBackground: dark.background,
        darkPrimary: dark.primary,
        darkSecondary: dark.secondary,
        darkCard: dark.card,
        darkBorder: dark.border,
        darkTextPrimary: dark.textPrimary,
        darkTextSecondary: dark.textSecondary,
      },

      fontFamily: {
        heading: ["Poppins_600SemiBold"],
        headingBold: ["Poppins_700Bold"],

        body: ["Inter_400Regular"],
        bodyMedium: ["Inter_500Medium"],
        bodyBold: ["Inter_700Bold"],
      },

      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",

        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",

        "6xl": "42px",
        "7xl": "48px",
        "8xl": "56px",
        "9xl": "64px",
      },
    },
  },
  plugins: [],
};
