import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg-compress.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
        saira: ['var(--font-saira)', 'monospace']
      },
      boxShadow: {
        button: '0px 0px 68px 7px #0A3A40',
      }
    },
  },
  plugins: [],
};
export default config;
