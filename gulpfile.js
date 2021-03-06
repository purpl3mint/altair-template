const gulp = require("gulp");

const pug2html = require("./gulp/pug2html");
const styles = require("./gulp/styles");
const images = require("./gulp/images");
const scripts = require("./gulp/scripts");

module.exports.start = gulp.series(pug2html, styles, images, scripts);
