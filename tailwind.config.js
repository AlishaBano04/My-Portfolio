/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // 🌟 Primary brand color
        primary: "#9fc900",

        // 🌞 Light theme colors
        "light-background": "#fefae0",
        "light-text": "#1a1a1a",
        "light-muted-text": "#444444",
        "light-border": "#e0e0e0",
        "light-heading": "#A8C23B", // ✅ New heading color

        // Optional extra card colors (in case you use them later)
        "card-soft-green": "#E6FFCC",
        "card-yellow": "#FFFACD",
        "card-blue": "#E3F2FD",
        "card-peach": "#FFEFD5",
        "card-mint": "#E5FDE5",
        "card-lilac": "#F3E8FF",

        // 🌚 Dark theme colors
        "dark-background": "#000000",
        "dark-card": "#111111",
        "dark-text": "#f5f5f5",
        "dark-muted-text": "#aaaaaa",
        "dark-border": "#333333",
      },
    },
  },
  plugins: [],
};
