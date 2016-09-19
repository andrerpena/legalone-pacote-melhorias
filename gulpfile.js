var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

// removes the output configuration from the webpack.config.js file, otherwise it doesn't work.
webpackConfig.output.path = null;

gulp.task('build', function () {
    // place code for your default task here
    return gulp.src('./src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));
});