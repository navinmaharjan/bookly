/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
        scale: {
            '0%': {transform: 'scale(1)'},
            '50%': {transform: 'scale(1.2)'},
            '100%': {transform: 'scale(1)'}
           
        }
    },
    animation: {
        'upscale': 'scale 30s linear infinite'
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
}
