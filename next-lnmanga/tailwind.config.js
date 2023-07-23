const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          600: '#00BFFF',
          700: '#0098D5',
          800: '#0073AD',
          900: '#004F86'
        },
        dark_main: {
          100: '#1A202C',
          200: 'rgba(29,33,35,0.84)',
          300: 'rgba(29,33,35,0.5)'
        },
        light_main: {
          100: '#F7FAFC',
          200: '#EDF2F7'
        },
        outstanding: '#d54d6d'
      }
    },
    fontSize: {
      '3xs': ['0.45rem', '0.75rem'],
      '2xs': ['0.65rem', '0.9rem'],
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
    require('@tailwindcss/line-clamp')
  ],
  // xwind options
  xwind: {
    mode: 'objectstyles'
  }
}
