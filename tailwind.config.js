module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./areas/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nanobloxGray: {
          light: "#36393f",
          DEFAULT: "#292b2f",
          dark: "#161719",
        },
        blue: {
          350: "#7ab5fc",
          450: "#4e94f8",
          550: "#3073f1",
        },
        orange: {
          500: "#d36d00",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      gradientColorStops: ["active"],
    },
  },
  plugins: [],
};
