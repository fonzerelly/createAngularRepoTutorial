var
gulp = require('gulp'),
concat = require('gulp-concat');

var app = [
    './app/**/*.js'
];

gulp.task('deploy', function() {
    return gulp.src(app)
        .pipe(concat('myApp.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['deploy']);

