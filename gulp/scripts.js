const gulp = require("gulp");

module.exports = function images(cb) {
  return gulp.src("src/js/*").pipe(gulp.dest("build/js"));
};
