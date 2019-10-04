var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemap = require('gulp-sourcemaps'),
  lec = require('gulp-line-ending-corrector'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');
livereload = require ('gulp-livereload');

gulp.task('scripts', function () {
  gulp.src([
    './js/jquery.js',
    './js/foundation.min.js',
    './js/plugins/what-input.min.js',
    './js/plugins/TweenMax.min.js',
    './js/hoverIntent.min.js',
    './js/plugins/brands.min.js',
    './js/plugins/solid.min.js',
    './js/plugins/easing.js',
    './js/plugins/modernizer.js',
    './js/plugins/slick.min.js',
    './js/plugins/isotope.js',
    './js/plugins/jquery.hoverdir.js',
    './js/plugins/counterup.js',
    './js/plugins/waypoints.js',
    './js/shortcode/script-shortcodes.js',
    './js/wd_owlcarousel.js',
    './js/animation.js',
    './js/scripts.js'
  ]).pipe(lec({verbose:true, eolc: 'LF', encoding:'utf8'}))
    .pipe(concat('wd-script.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemap.write({includeContent: false}))
    .pipe(sourcemap.init({loadMaps: true}))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/**/*.scss', ['sass'])
  gulp.watch('js/**/*.js', ['scripts'])
})
gulp.task('default', ['sass','scripts', 'watch']);