import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
const publicSCSSFunction = () => {
    return gulp
        .src('*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('.'));
};
gulp.task('public-scss', publicSCSSFunction);
const watchFunction = () => {
    gulp.watch('*.scss', publicSCSSFunction);
};
gulp.task('watch', watchFunction);
gulp.task('default', () => {
    publicSCSSFunction();
    watchFunction();
});
