/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xxs: "420px",
      xs: "480px", // Extra small devices
      sm: "640px", // Small devices
      md: "768px", // Medium devices
      lg: "1024px", // Large devices
      xl: "1280px", // Extra large devices
      "2xl": "1536px", // 2X Extra large devices
      "3xl": "1920px", // 3X Extra large devices
      "4xl": "2560px", // 4X Extra large devices
    },
    extend: {
      fontFamily: {
        display: ["'Clash Grotesk'", "sans-serif"],
        body: ["'Satoshi Variable'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
