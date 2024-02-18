/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "dark-blue": "hsl(235, 21%, 11%)",
        "dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "hover-light-grayish-blue": "hsl(236, 33%, 92%)",
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "v-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "vv-dark-grayish-blue": "hsl(237, 14%, 26%)",
      },

      screens: {
        mobile: { max: "375px" },
        desktop: { max: "1440px" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};

// ### Primary

// - Bright Blue: hsl(220, 98%, 61%)
// - Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

// ### Light Theme

// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

// - Very Dark Blue: hsl(235, 21%, 11%)
// - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// - Light Grayish Blue: hsl(234, 39%, 85%)
// - Light Grayish Blue (hover): hsl(236, 33%, 92%)
// - Dark Grayish Blue: hsl(234, 11%, 52%)
// - Very Dark Grayish Blue: hsl(233, 14%, 35%)
// - Very Dark Grayish Blue: hsl(237, 14%, 26%)
