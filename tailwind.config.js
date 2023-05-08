/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c1512",
        secondary: "#dedede",
        primaryButton: "#1a2930",
        secondaryButton: "#e3e3e3",
        accent: "#fff43a"
      }
    },
  },
 
};