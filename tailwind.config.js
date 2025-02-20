/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        thin: 100,
        "extra-light": 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic",
        oblique: "oblique",
        normal: "normal",
      },
      opacity: {
        88: "0.88",
      },
    },
  },
  variants: {
    extend: {
      fontStyle: ["responsive", "hover", "focus"],
      fontWeight: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
