const rollup = require('rollup')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const typescript = require('rollup-plugin-typescript2')
const vuePlugin = require('rollup-plugin-vue')
// FIXME css
const css = require('rollup-plugin-css-only')
const json = require('@rollup/plugin-json')
const { getPackagesSync } = require('@lerna/project')
const packageConfig = require('../package.json')
const ora = require('ora')
const chalk = require('chalk')

const deps = Object.keys(packageConfig.dependencies)
const pkgs = getPackagesSync().filter(it => !/theme/gi.test(it.name))

async function build() {
	const spinner = ora(`${chalk.blue('Building...')}`).start()
	for (const pkg of pkgs) {
		let pkgName = 'erui'

		if (/^@erui/gi.test(pkg.name)) {
			pkgName = pkg.name.slice(6)
		}

		const inputOptions = {
			input: `packages/${pkgName}/index.ts`,
			plugins: [
				nodeResolve({
					extensions: ['js', 'ts', 'jsx', 'vue', 'json'],
				}),
				json(),
				typescript({
					tsconfigOverride: {
						compilerOptions: {
							declaration: false,
						},
						exclude: ['node_modules', 'packages/**/__tests__/*'],
					},
					abortOnError: false,
				}),
				css(),
				vuePlugin({
					target: 'browser',
					css: false,
					exposeFilename: false,
				}),
			],
			external(id) {
				return (
					/^vue/.test(id) ||
					deps.some(k => new RegExp('^' + k).test(id))
				)
			},
		}

		const outputOptions = {
			file: `lib/er-${pkgName}/index.js`,
			format: 'esm',
			name: `er-${pkgName}`,
		}

		spinner.info(`${chalk.blue('Building ' + pkgName)}`)

		const bundle = await rollup.rollup(inputOptions)

		await bundle.write(outputOptions)

		spinner.succeed(`${chalk.green('Build done ' + pkgName)}`)
	}
}

build()
