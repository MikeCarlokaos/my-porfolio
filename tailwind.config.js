/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glide: {
          "0%": { outerWidth: "0%" },
          "25%": { outerWidth: "25%" },
          "50%": { outerWidth: "50%" },
          "75%": { outerWidth: "75%" },
          "100%": { outerWidth: "100%" },
        },
      },

      animation: {
        glide: "glide 5s ease-in-out",
      },

      colors: {
        dark: {
          DEFAULT: "#101820",
          50: "#436486",
          100: "#405F7F",
          200: "#395572",
          300: "#324B64",
          400: "#2B4156",
          500: "#243749",
          600: "#1E2C3B",
          700: "#17222E",
          800: "#101820",
          900: "#000000",
        },
        sunglow: {
          DEFAULT: "#FDBF2D",
          50: "#FFF6E3",
          100: "#FFF0CF",
          200: "#FEE4A6",
          300: "#FED87E",
          400: "#FDCB55",
          500: "#FDBF2D",
          600: "#F0A902",
          700: "#B88202",
          800: "#805B01",
          900: "#493301",
        },
        gallery: {
          DEFAULT: "#F0F0F0",
          50: "#F0F0F0",
          100: "#EDEDED",
          200: "#E8E8E8",
          300: "#E3E3E3",
          400: "#DEDEDE",
          500: "#D9D9D9",
          600: "#D4D4D4",
          700: "#CFCFCF",
          800: "#CACACA",
          900: "#C5C5C5",
        },
      },
    },
  },
};
