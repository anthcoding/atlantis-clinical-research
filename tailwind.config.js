/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

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
			dark: '#1D1D1F',
			secondaryDark: '#425466',
			// secondaryDarkLighter: '#425466',
			tertiaryDark: '#303030',
			borderDark: '#00000066',
			darkBlue: '#0A2540',
			lightBlue: '#CDF7FA',
			linkBlue: '#0096F7',
			white: '#ffff',
			secondaryWhite: '#ffffffb3',
			cardWhite: '#F6F6F6',
			cardBlue: '#D1F9FB',
		},
		extend: {
			borderRadius: {
				regular: '30%',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				'sponsor-gradient': "url('/public/assests/our-mission-gradient.jpeg')",
			},
		},
		fontSize: {
			xsm: '8px',
			sm: '15px',
			md: '30px',
			lg: '25px',
			xl: '50px',
			xxl: '190px',
			xlMobile: '55px',
		},
	},
};
