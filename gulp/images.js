const gulp = require('gulp')

module.exports = function images(cb) {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('build/img'));
}