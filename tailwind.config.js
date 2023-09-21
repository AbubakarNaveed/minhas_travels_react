/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        superSmall: { max: "249px" },
        small: { min: "250px", max: "400px" },
        navbarBurger: { min: "699px" },
        medium: { min: "401px", max: "700px" },
        large: { min: "701", max: "1200px" },
        xlg: "1201px",
      },
    },
  },

  plugins: [require("daisyui")],
};
