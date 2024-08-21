const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function buildStyles(){
  return gulp.src('./src/style/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function compessJs(){
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.styles = buildStyles;
exports.default = defaultTask;

exports.default = gulp.parallel(buildStyles, compessJs);

exports.watch = function(){
  gulp.watch('./src/style/*.scss', gulp.parallel(buildStyles));
  gulp.watch('./src/scripts/*.js', gulp.parallel(compessJs));
}