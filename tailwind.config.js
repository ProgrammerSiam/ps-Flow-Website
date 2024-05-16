/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        Greyish: "#B4B9B0",
        Black: "#01130F ",
        DarkGreen: "#022C22 ",
        Silver: "#9EA7A5 ",
        Jade: "#10B981 ",
        Timberwolf: "#D8E3D6 ",
        OliveGreen: "#6C9820 ",
        EerieBlack: "#192117 ",
        DarkWood: "#5C3D1F ",
        Gunmetal: "#646A69 ",
        EtonBlue: "#D6F1CF",
        WhiteSmoke: "#F5F4F4 ",
        Cornsilk: "#FFEBB7 ",

        Background: {
          Beige: "#FFF7ED",
          DarkGreen: "#022C22",
          Green: "#BEF264",
          Grey: "#F5FAF9",
          White: "#FFFFFF",
          BaseWhite: "#FFFFFF",
        },

        Button: {
          PrimaryNormal: "#022C22",
          SecondaryNormal: "#BEF264",
          TetriaryNormal: "#022C22",
        },
        Content: {
          Alpha: "#FFFFFFCC",
          Contrast: "#929C9A",
          Primary: "#1D1F1E",
          Reversed: "#FFFFFF",
          Secondary: "#646A69",
        },
      },

      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {},
      borderWidth: {},
      backgroundImage: {},
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
      });
      addUtilities({});
    }),
  ],
};
