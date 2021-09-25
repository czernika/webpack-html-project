module.exports = {
	mode: 'jit',

	darkMode: false,

	purge: {
		content: [
			'app/**/*.html',
			'app/**/*.pug',
			'app/js/**/*.js',
		],
	},

	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem', // 16px both sides
			}
		},
		extend: {},
	},

	variants: {
		extend: {},
	},

	plugins: [],
}
