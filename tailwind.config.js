/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "950px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "scissors-start": "hsl(39, 89%, 49%)",
        "scissors-end": "hsl(40, 84%, 53%)",
        "rock-start": "hsl(349, 71%, 52%)",
        "rock-end": "hsl(349, 70%, 56%)",
        "lizard-start": "hsl(261, 73%, 60%)",
        "lizard-end": "hsl(261, 72%, 63%)",
        "cyan-start": "hsl(189, 59%, 53%)",
        "cyan-end": "hsl(189, 58%, 57%)",
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        "main-start": "hsl(214, 47%, 23%)",
        "main-end": "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
