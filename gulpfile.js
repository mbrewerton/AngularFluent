// TODO
var gulp = require('gulp'),
watch = require('gulp-watch'),
concat = require('gulp-concat'),
minify = require('gulp-minify'),
sass = require('gulp-sass'),
plumber = require('gulp-plumber'),
order = require('gulp-order');

var paths = {
    src: {
        js: './src/',
        scss: './src/'
    },
    dist: {
        js: './dist/js/',
        css: './dist/css/'
    }
}

var plumberHandler = plumber({
    handleError: function (err) {
        console.log(err);
        this.emit('end');
    }
});

gulp.task('build:js', function() {
    return gulp.src(paths.src.js + '**/*.js')
        .pipe(plumberHandler)
        .pipe(order([
            'core/core.js',
            'core/helpers/**/*.js',
            'core/services/**/*.js',
            'components/**/*.js',
        ]))
        .pipe(concat('angularFluent.js'))
        .pipe(gulp.dest(paths.dist.js));
});

gulp.task('build:css', function() {
    return gulp.src([paths.src.scss + '**/*.scss', '!./src/libs/**/*.*'])
        .pipe(plumberHandler)
        .pipe(order([
            'core/scss/base.scss',
            'components/**/*.scss'
        ]))
        .pipe(sass())
        .pipe(concat('angularFluent.css'))
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task('watch:js:build', function() {
    watch(paths.src.js + '**/*.js', {}, function() { gulp.start('build:js'); });
})