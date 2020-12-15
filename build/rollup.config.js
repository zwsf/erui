import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import vuePlugin from 'rollup-plugin-vue'
import json from '@rollup/plugin-json'
import pkg from '../package.json'

const deps = Object.keys(pkg.dependencies || {})

export default [
	{
		input: path.resolve(__dirname, '../packages/erui/index.ts'),
		output: {
			file: `lib/index.esm.js`,
			format: 'es',
		},
		plugins: [
			nodeResolve({
				extensions: ['js', 'ts', 'jsx', 'vue', 'json'],
			}),
			json(),
			// 打包vue3组件时报错
			// commonjs(),
			typescript({
				tsconfigOverride: {
					include: ['packages/**/*', 'typings/shims-vue.d.ts'],
					exclude: ['node_modules', 'packages/**/__tests__/*'],
				},
				abortOnError: false,
			}),
			vuePlugin({
				target: 'browser',
				css: false,
				exposeFilename: false,
			}),
			terser(),
		],
		// 若发现有外部依赖包，则进行匹配，使用外界依赖，不打进bundle中
		external(id) {
			return (
				/^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
			)
		},
	},
]
