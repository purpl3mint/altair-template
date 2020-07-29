const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const stylelint = require('stylelint')


module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(cleanCSS())
    //    .pipe(sourcemaps.init())
    //    .pipe()
    .pipe(gulp.dest('build/css'));
}