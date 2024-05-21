/* eslint-disable node/no-unpublished-import */

import gulp from 'gulp'

import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

/*
 * Compile SASS
 */

const publicSCSSFunction = () => {
  return gulp
    .src('*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('.'))
}

gulp.task('public-scss', publicSCSSFunction)

/*
 * Watch
 */

const watchFunction = () => {
  gulp.watch('*.scss', publicSCSSFunction)
}

gulp.task('watch', watchFunction)

/*
 * Initialize default
 */

gulp.task('default', () => {
  publicSCSSFunction()
  watchFunction()
})
