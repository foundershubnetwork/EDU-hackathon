/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        purplelight: "#7474A7",
        purplemedium: "#350A60",
        purpledark: "#221148",
        purplemax: "#0B0026",
        purplebtnlt: "#B026FF",
        purplebtndk: "#BA50FF",
        purplebtngray: "#4C307A",
        purplestroke: "#350A60",
        purpleactone: "#B026FF",
        purpleacttwo: "#8A50FF",
        purplesmalltext: "#4B4278",
        white: "#FFF",
        whitesociobg: "rgba(255, 255, 255, 0.12)",
        whiteoff: "#C9C9C9",
        yellowverf: "#FFC300",
        greenverf: "#00FF08",
        redwarn: "#FF0000",
      },
      letterSpacing: {
        otpwide: "0.2em",
      },
    },
  },
  plugins: [],
};
