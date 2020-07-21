const gulp = require('gulp');

const pug2html = require('./gulp/pug2html');
const styles = require('./gulp/styles');

module.exports.start = gulp.series(pug2html, styles);