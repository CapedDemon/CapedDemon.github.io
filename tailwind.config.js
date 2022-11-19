/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      mdd: { max: "600px" },

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      ssm: { max: "560px" },
      sms: { max: "520px" },
      xlsm: { max: "440px" },
      lgsm: { max: "340px" },

      invmd: { min: "767px" },
    },
    extend: {
      fontFamily: {
        gloria: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
};
