const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["src/**/*.jsx"] }))
    .pipe(dest("src/css"));
}

function watchTask() {
  watch(["src/sass/**/*.scss", "src/**/*.jsx"], buildStyles);
  // watch(["src/sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
