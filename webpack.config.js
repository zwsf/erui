/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: path.join(__dirname, 'example/main.ts'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.styl/,
				use: ['style-loader', 'css-loader', 'stylus-loader'],
			},
			{
				test: /\.(ts|js)x?$/,
				include: [/example/, /packages/],
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.html',
		}),
		new VueLoaderPlugin(),
	],
	devServer: {
		// 打开报错 不支持了?
		// contentBase: path.join(__dirname, 'public'),
		port: 9000,
		compress: true,
		hot: true,
		open: true,
	},
}
