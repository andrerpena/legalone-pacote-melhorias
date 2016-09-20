var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

// removes the output configuration from the webpack.config.js file, otherwise it doesn't work.
webpackConfig.output.path = null;

gulp.task('copy_manifest', function() {
    return gulp.src('./manifest.template.json')
        .pipe(rename('manifest.json'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_icons', function() {
    return gulp.src('./icons/*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_jquery', function() {
    return gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_vue', function() {
    return gulp.src('./node_modules/vue/dist/vue.min.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['copy_manifest', 'copy_icons', 'copy_jquery', 'copy_vue'], function () {
    // place code for your default task here
    return gulp.src('./src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));
});