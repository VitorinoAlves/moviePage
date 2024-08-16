const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
  return gulp.src('./src/style/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.styles = buildStyles;
exports.default = defaultTask;

exports.watch = function(){
  gulp.watch('./src/style/*.scss', gulp.parallel(buildStyles));
}