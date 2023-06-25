/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('tailwindcss-highlights')],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '369px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      xxl: '1950px',
    },
    colors: {
      yellow: 'rgba(61, 227, 19,.5)',
      white: '#ffffff',
      darkWhite: '#F9F5F6',
      dark: '#1D1D1F',
      darkHeading: '#0A2540',
      darkGray: '#425466',
      lightGray: '#7D7A7A',
      extraLightGray: 'rgba(125, 122, 122, .3)',
      extraLightGray2: 'rgba(125, 122, 122, .08)',
      lightBlue: '#DE70F4',
      lightBlue200: 'rgba(222, 112, 244, .5)',
      lightBlueMedium: '#DA6CF4',
      darkBlue: '#9A35EB',
      red: '#F24C3D',
    },
    extend: {
      borderRadius: {
        regular: '30%',
      },
      fontFamily: {
        body: ['poppins'],
      },
    },
    fontSize: {
      xsm: '8px',
      sm: '13px',
      md: '15px',
      xmd: '20px',
      lg: '25px',
      xlg: '35px',
      xl: '50px',
      xxl: '64px',
    },
  },
};
