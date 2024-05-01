/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // fontFamily: { display: ["Fredoka", "sans-serif"] },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: { display: ["Fredoka", "sans-serif"] },
      colors: {
        lightBlue: "#098AE2",
        // tahiti: {
        //   100: "#cffafe",
        //   200: "#a5f3fc",
        //   300: "#67e8f9",
        //   400: "#22d3ee",
        //   500: "#06b6d4",
        //   600: "#0891b2",
        //   700: "#0e7490",
        //   800: "#155e75",
        //   900: "#164e63",
        // },
        tahiti: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
        primary: {
          100: "#1A30B1",
        },
      },
    },
  },
  plugins: [],
};

