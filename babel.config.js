module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				loose: false,
				targets: {
					browsers: '> 1%, IE 11, not op_mini all, not dead',
					node: 8,
				},
			},
		],
		['@babel/preset-typescript'],
	],
	env: {
		test: {
			presets: [['@babel/preset-env', { targets: { node: 8 } }]],
		},
	},
}
