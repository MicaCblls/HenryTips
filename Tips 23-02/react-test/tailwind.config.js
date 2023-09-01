/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "280px",
      sm: "640px",
      md: "780px",
      lg: "1026px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        header: "#0d0d0d",
        nav: "#3e3e3e",
        teal50: "#f0fdfa",
      },
    },
  },
  plugins: [require("daisyui")],
};
