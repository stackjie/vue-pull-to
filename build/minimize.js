const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
  gulp.src('../dist/vue-pull-to.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
    .pipe(uglify({
      sourceMap: true
    }))
    .pipe(sourcemaps.write('../dist'))
    .pipe(gulp.dest('../dist'));
});
