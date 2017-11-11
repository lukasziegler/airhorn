/*jslint node: true */
'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');
var pug = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
  pug: 'src/*.pug',
  js: 'src/js/**/*.js',
  stylesWatch: 'src/styles/**/*.styl',
  stylesInput: 'src/styles/styles.styl',
  output: 'docs',
  outputJS: 'docs/js/*.js',
  outputHTML: 'docs/index.html'
};

gulp.task('styles', function () {
  gulp.src(path.stylesInput)
    .pipe(stylus({
      paths: ['node_modules'],
      'include css': true,
      compress: true
    }))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream());
});

gulp.task('js', function () {
  gulp.src(path.js)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(path.output+'/js'));
});

gulp.task('minify', function () {
  return gulp.src(path.pug)
    .pipe(pug())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(path.output));
});

gulp.task('observeFiles', function () {
  gulp.watch(path.stylesWatch, ['styles']);
  gulp.watch(path.js, ['js']);
  gulp.watch(path.pug, ['minify']);
  gulp.watch(path.outputHTML).on('change', reload);
  gulp.watch(path.outputJS).on('change', reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: path.output,
      index: 'index.html'
    }
  });
});

gulp.task('build', ['styles', 'js', 'minify']);
gulp.task('default', ['build', 'observeFiles', 'browserSync']);
