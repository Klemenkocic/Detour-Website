import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        detour: {
          primary: '#FF5C29',
          primarySoft: '#FFF3F0',
          lavender: '#F0E0FF',
          purple: '#931FFF',
          sky: '#EBF4FF',
          blue: '#0071EB',
          mint: '#EBFFED',
          green: '#00A316',
          gray100: '#E4E5E7',
          gray200: '#C9CBCF',
          gray300: '#A4A7AE',
          gray700: '#414651',
          gray900: '#181D27',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'covered-by-your-grace': ['Covered By Your Grace', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
