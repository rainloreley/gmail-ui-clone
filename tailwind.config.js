module.exports = {
	purge: [],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			'dark-primary': '#0f0f0f',
			'dark-secondary': '#1c1c1c',
			'dark-tertiary': '#212121',
		}),
		extend: {
			height: {
				gheader: '64px',
			},
			width: {
				gsearchbar: '600px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
