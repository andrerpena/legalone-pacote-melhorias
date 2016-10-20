const gulp = require('gulp');
const rename = require('gulp-rename');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.js');
const zip = require('gulp-zip');

// removes the output configuration from the webpack.config.js file, otherwise it doesn't work.
webpackConfig.output.path = null;

gulp.task('copy_manifest', function() {
    return gulp.src('./src/manifest.template.json')
        .pipe(rename('manifest.json'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_icons', function() {
    return gulp.src('./icons/*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_popup', function() {
    return gulp.src('./src/popup.html')
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

gulp.task('build', ['copy_manifest', 'copy_icons', 'copy_jquery', 'copy_vue', 'copy_popup'], function () {
    // place code for your default task here
    return gulp.src('./src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));
});

gulp.task('publish', ['build'], function() {
    return gulp.src('./dist/*')
        .pipe(zip('l1pm.zip'))
        .pipe(gulp.dest('./'))
});