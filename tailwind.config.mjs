const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        pinkish: {
          100: "#80c8d8",
          200: "##55b0c0",
          300: "##2a98a8",
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "##2a98a8",
              "&:hover": {
                color: "##80c8d8",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),

            a: {
              color: theme("colors.purple.400"),
              "&:hover": {
                color: theme("colors.purple.300"),
              },
            },
          },
        },
      }),
    },
  },

  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
