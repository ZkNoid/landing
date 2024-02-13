import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'bg-dark': '#212121',
      'foreground': '#F9F8F4',
      'left-accent': '#D2FF00',
      'middle-accent': '#97FF00',
      'right-accent': '#56EBFF'
    },
    extend: {
      fontFamily: {
        museo: ['var(--museo-slab)'],
        plexmono: ['var(--plex-mono)']
      } 
    },
  },
  plugins: [],
};
export default config;
