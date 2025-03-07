/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      container: {
          center: true,
          padding: "15px",
      },
      screens: {
          sm: "640px",
          md: "768px",
          lg: "950px",
          xl: "1200px",
      },
      fontFamily: {
          primary: "var(--font-jetbrainsMono)",
      },
      extend: {
          colors: {
              primary: "#1c1c22",
              accent: {
                  DEFAULT: "#00ff99",
                  hover: "#00e187",
              },
          },
          keyframes: {
              "accordion-down": {
                  from: { height: "0" },
                  to: { height: "var(--radix-accordion-content-height)" },
              },
          },
      },
  },
  plugins: [],
};
