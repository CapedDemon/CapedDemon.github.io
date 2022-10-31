/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xlsm: "400px",
      ssm: "516px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
