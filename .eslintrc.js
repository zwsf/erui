module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
	],
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'eol-last': 'error',
		'no-trailing-spaces': 'error',
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'always-multiline'],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'never',
					normal: 'never',
					component: 'always',
				},
			},
		],
	},
}
