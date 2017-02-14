var gulp= require('gulp');
    sass= require('gulp-sass');
    pug= require('gulp-pug');

var sassOption = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};



gulp.task('sass',function () {
    gulp.src('src/scss/main.scss')
        .pipe(sass(sassOption))
        .pipe(gulp.dest('bin/css/'));
});
gulp.task('pug',function () {
    gulp.src('src/pug/pages/*.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('bin/html/'));
});

gulp.task('js',function () {
    gulp.src('src/js/main.js')
        .pipe(gulp.dest('bin/js/'));
});

gulp.task('image',function () {
    gulp.src('src/image/**/')
        .pipe(gulp.dest('bin/image'));
});
gulp.task('movelib',function () {
    gulp.src('node_modules/bootstrap/dist/css/**/*.min.css')
        .pipe(gulp.dest('bin/final-product/lib/bootstrap/css'));
    gulp.src('node_modules/bootstrap/dist/js/**/*.min.js')
        .pipe(gulp.dest('bin/final-product/lib/bootstrap/js'));

    gulp.src('node_modules/owlcarousel/owl-carousel/**/*.css')
        .pipe(gulp.dest('bin/final-product/lib/owlcarousel/css'));
    gulp.src('node_modules/owlcarousel/owl-carousel/**/*.min.js')
        .pipe(gulp.dest('bin/final-product/lib/owlcarousel/js'));
    gulp.src('node_modules/ionicons/dist/css/**/*.min.css')
        .pipe(gulp.dest('bin/final-product/lib/ionicons/css'));
    gulp.src('node_modules/ionicons/dist/fonts/*')
        .pipe(gulp.dest('bin/final-product/lib/ionicons/fonts'));
    gulp.src('node_modules/isotope-layout/dist/**/*.min.js')
        .pipe(gulp.dest('bin/final-product/lib/isotope-layout/'));
    gulp.src('node_modules/jquery/dist/*.min.js')
        .pipe(gulp.dest('bin/final-product/lib/jquery/'));
    gulp.src('node_modules/tether/dist/js/*.min.js')
        .pipe(gulp.dest('bin/final-product/lib/tether/'));

});
gulp.task('watchsass',function () {
    gulp.watch("src/scss/**/*.scss",['sass']);
});

gulp.task('watchjs',function () {
    gulp.watch("src/js/**/*.js",['js']);
});
gulp.task('watchpug',function () {
    gulp.watch("src/pug/**/*.pug",['pug']);
});

gulp.task('watchimg',function () {
    gulp.watch("src/image/*",['image']);
});

gulp.task('default',['sass','pug','watchsass','watchpug','js','watchjs','image','watchimg']);
