const gulp = require("gulp");
const watch = require("gulp-watch");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("js", function () {
  return gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("css", function () {
  return gulp
    .src("src/*.css")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist"))
    .on("error", function (err) {
      console.error(err);
    });
});

gulp.task("watch", function () {
  gulp.watch("src/*.js", gulp.series("js"));
  gulp.watch("src/*.html", gulp.series("html"));
  gulp.watch("src/*.css", gulp.series("css"));
});

gulp.task("default", gulp.series("watch"));
