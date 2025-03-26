import type { Config } from "tailwindcss";

export default {
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
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '0.75rem',
          xl: '1rem',
          '2xl': '3rem',
        },
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
