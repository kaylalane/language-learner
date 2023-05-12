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
        bg: "#ffffff",
        text: "#353955",
        primary: "#353955",
        secondary: "#f5f6e6",
        accent: "#54668e"
      }
    },
  },
 
};