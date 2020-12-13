module.exports = {
	moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'^.+\\.(j|t)sx?$': [
			'babel-jest',
			{
				presets: [
					[
						'@babel/preset-env',
						{
							targets: { node: true },
						},
					],
					'@babel/preset-typescript',
				],
			},
		],
	},
	collectCoverage: true,
	collectCoverageFrom: ['packages/**/*.{ts,vue}'],
	coverageReporters: ['html', 'text-summary'],
}
