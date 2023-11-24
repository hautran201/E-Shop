/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "san-serif"],
      Poppins: ["Poppins", "san-serif"],
    },
    extend: {
      screens: {
        "1300px": "1300px",
        "1100px": "1110px",
        "1000px": "1050px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
