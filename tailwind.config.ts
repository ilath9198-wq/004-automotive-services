import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080a',
          900: '#0d0f14',
          850: '#13161c',
          800: '#1a1e26',
          750: '#222733',
          700: '#2d3342',
          600: '#3e4659',
        },
        electric: {
          300: '#70e4ff',
          400: '#38dbff',
          500: '#00c3ff',
          600: '#0099ff',
          700: '#0070e0',
        },
        racing: {
          400: '#ff7733',
          500: '#ff5500',
          600: '#e64600',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 195, 255, 0.4)',
        'glow-orange': '0 0 25px -5px rgba(255, 85, 0, 0.4)',
        'metal-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'hud-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'carbon-mesh': 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)',
        'metal-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
