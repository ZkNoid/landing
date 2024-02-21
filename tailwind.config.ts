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
      'right-accent': '#56EBFF',
      'dark-buttons-text': '#212121'
    },
    fontSize: {
      'headline-1': ['50px', {lineHeight: '60px', fontWeight: '700'}],
      'headline-2': ['35px', {lineHeight: '35px', fontWeight: '700'}],
      'headline-3': ['24px', {lineHeight: '29px', fontWeight: '700'}],
      'big-text': ['30px', {lineHeight: '36px', fontWeight: '600'}],
      'regular-text': ['20px', {lineHeight: '22px', fontWeight: '400'}],
      'small-text': ['12px', {lineHeight: '15px', fontWeight: '400'}],
      'button': ['24px', {lineHeight: '24px', fontWeight: '400'}],
      'menu-text': ['16px', {lineHeight: '19px', fontWeight: '400'}],
      'logo-text': ['32px', {lineHeight: '39px', fontWeight: '700'}],
      'cover-text-1': ['100px', {lineHeight: '100px', fontWeight: '700'}],
      'cover-text-2': ['85px', {lineHeight: '85px', fontWeight: '700'}],
      'big-numbers': ['80px', {lineHeight: '96px', fontWeight: '600'}],

      'mobile-headline-0': ['50px', {lineHeight: '60px', fontWeight: '700'}],
      'mobile-headline-1': ['35px', {lineHeight: '42px', fontWeight: '700'}],
      'mobile-headline-2': ['24px', {lineHeight: '24px', fontWeight: '700'}],
      'mobile-headline-3': ['20px', {lineHeight: '24px', fontWeight: '700'}],
      'mobile-headline-4': ['30px', {lineHeight: '36px', fontWeight: '500'}],
      'mobile-link-1': ['16px', {lineHeight: '19px', fontWeight: '500'}],
      'mobile-link-2': ['24px', {lineHeight: '29px', fontWeight: '500'}],
      'mobile-button': ['20px', {lineHeight: '20px', fontWeight: '500'}],
      'mobile-accent-text': ['16px', {lineHeight: '19px', fontWeight: '500'}],
      'mobile-menu': ['14px', {lineHeight: '17px', fontWeight: '500'}],
      'mobile-big-text': ['20px', {lineHeight: '24px', fontWeight: '600'}],
      'mobile-main-text': ['14px', {lineHeight: '15px', fontWeight: '400'}],
      'mobile-copyright': ['9px', {lineHeight: '12px', fontWeight: '400'}],
      'mobile-big-numbers': ['60px', {lineHeight: '72px', fontWeight: '600'}],
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
