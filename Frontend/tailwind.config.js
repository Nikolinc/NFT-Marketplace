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
        "regal-blue": "#243c5a",
        "Davy-Grey": "#575757",
        "Turquoise": "#4CFAEF",
        "Medium-Sky-Blue": "#89E4E6",
        "Black-Olive": "#3C3C3C",
        "Charleston-Green": "#2C2C2C",
        "Chinese-Silver": "#A6A6A6",
        "Outer-Space": "#444",
        "Chinese-Silver": "#CBCBCB",
        "Light-Silver":"#D7D7D7 "
      },
    },
  },
};
