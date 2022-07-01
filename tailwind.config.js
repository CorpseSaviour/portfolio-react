/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "#1B2430",
        Light: "#252840",
        Neon: "#D17AFF",
        Platinum: "#EDEDED",
        Silver: "#BDBDBD",
      },
      height: {
        5: "20px",
      },
      width: {
        5: "20px",
        14: "56px"
      },
    },
    fontFamily: {
      Roboto: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};
