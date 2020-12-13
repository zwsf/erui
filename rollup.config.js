import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import vuePlugin from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import json from '@rollup/plugin-json'

export default {
	input: 'packages/elui/index.ts',
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
		// 如果输出的不是类库 则不需要类型声明文件
		typescript({
			tsconfigOverride: {
				compilerOptions: {
					declaration: false,
				},
				exclude: ['node_modules', 'packages/**/__tests__/*'],
			},
			abortOnError: false,
		}),
		vuePlugin({
			target: 'browser',
			css: false,
			exposeFilename: false,
		}),
		css({
			output: './dist/bundle.css',
		}),
		terser(),
	],
	external: ['vue'],
}
