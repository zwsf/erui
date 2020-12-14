/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'
const { series, src, dest } = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

const noElPrefixFile = /(index|base|display)/

function compile() {
	return src('./src/*.styl')
		.pipe(stylus())
		.pipe(autoprefixer({ cascade: false }))
		.pipe(cssmin())
		.pipe(
			rename(function (path) {
				if (!noElPrefixFile.test(path.basename)) {
					path.basename = `er-${path.basename}`
				}
			})
		)
		.pipe(dest('./lib'))
}

function copyfont() {
	return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
