var
gulp = require('gulp'),
concat = require('gulp-concat');

var app = [
    './bower_components/angular/angular.js',
    './app/**/*.js'
];

var index = [
    './app/index.html'
];

gulp.task('deployJS', function() {
    return gulp.src(app)
        .pipe(concat('myApp.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('deployHTML', function () {
    return gulp.src(index)
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['deployJS', 'deployHTML']);

