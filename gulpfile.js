'use strict';
const gulp = require('gulp');
const scss = require('gulp-sass');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const remember = require('gulp-remember');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";


gulp.task('scss', function(){
    return gulp.src('frontend/scss/*.scss', {since: gulp.lastRun('scss')})
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        //        .pipe(debug({title:"src"}))
        .pipe(scss())
        .pipe(autoprefixer('last 20 versions'))
        .pipe(remember('scss'))
        .pipe(gulpif(isDevelopment, sourcemaps.write()))
        //        .pipe(debug({title:"css"}))
        .pipe(gulp.dest('public/css'));

});



gulp.task('assets', function(){
    return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
        .pipe(newer('public'))
        .pipe(debug({title: 'COPY'}))
        .pipe(gulp.dest('public'));
});

gulp.task('clean', function(){
    return del('public')
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('scss', 'assets')));


gulp.task('watch', function(){
    gulp.watch('frontend/scss/**/*.*', gulp.series('scss'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});
gulp.task('serve', function(){
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
