var gulp = require('gulp');
var jshint = require('./src/index');
var Mocha = require('mocha');


gulp.task('lintu', function () {
  return gulp.src([
    '*.jsx'
  ]).pipe(jshint())
//  .pipe (jshint.reporter('default', { verbose: true }))
//  .pipe(jshint.reporter('fail'));
});
