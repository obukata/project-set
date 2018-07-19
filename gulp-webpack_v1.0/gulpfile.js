const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')

//config
const webpackConfig = require('./webpack.config')

// task set
const task = {
	sass: (opt) => {
		gulp.src('assets/sass/core.scss')
			.pipe(sass(opt))
			.pipe(sourcemaps.write())
			.on('error', sass.logError)
			.pipe(gulp.dest('assets/styles/'))
	},

	browserSync: () => {
		browserSync.init({
			server: './'
		})
	},

	webpackStream: () => {
		webpackStream(webpackConfig, webpack)
			.pipe(gulp.dest('assets/scripts'))
	}
}


// default task
gulp.task('default', () => {
	task.webpackStream()
	task.sass({outputStyle: 'expanded'})
	task.browserSync()


	gulp.watch('assets/sass/*', function() {
		task.sass({outputStyle: 'expanded'})
	})
})



// deploy task
gulp.task('deploy', () => {
	task.sass({outputStyle: 'compressed'})

	gulp.watch('assets/sass/*', function() {
		task.sass({outputStyle: 'compressed'})
	})
})
