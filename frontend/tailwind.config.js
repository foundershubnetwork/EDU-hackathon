import path from "path";

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
        blueocidp1: "#4477CE",
        blueocidp2: "#4C3BCF",
        blueocid3: "#00EDBE",
      },
      letterSpacing: {
        otpwide: "0.2em",
      },
    },
  },
  plugins: [],

  // Vite specific configuration
  defineConfig: ({ command }) => {
    const includeSampleBaseName =
      command === "build" && !process.env.STANDALONE_SAMPLE_BUILD;
    return {
      base: includeSampleBaseName ? "/routing/reach-router/" : "/",
      plugins: [require("@vitejs/plugin-react")()],
      define: {
        "process.env": {},
      },
      resolve: {
        alias: {
          "react-router-dom": path.resolve(
            __dirname,
            "node_modules/react-router-dom"
          ),
        },
      },
      server: {
        port: process.env.PORT || 8080,
      },
      preview: {
        port: process.env.PORT || 8080,
      },
      build: {
        rollupOptions: {
          // Custom warning handling
          onwarn(warning, warn) {
            warn(
              '\nBuild warning happened, customize "onwarn" callback in vite.config.js to handle this error.'
            );
            throw new Error(warning);
          },
        },
      },
    };
  },
};
