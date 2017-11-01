var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

// gulp.task('mytask', function () {
    // console.log('hello from rrbb');
    // return gulp.src('source-files')
    //     .pipe(plugin())
    //     .pipe(gulp.dest('folder'))
// });
gulp.task('sass', function () {
    // return gulp.src('app/sass/main.sass')
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});



gulp.task('scripts', function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.js',
        'app/libs/angular/angular.js',
        'node_modules/angular-material/angular-material.js',
        'node_modules/angular-route/angular-route.js'

    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

// gulp.task('scripts2', ['scripts'], function () {
//     return gulp.src([
//         'app/js/app.js',
//         'app/js/PostController.js',
//         'app/js/servise.js'
//     ])
//         .pipe(concat('libs2.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'));
// });

gulp.task('css-libs', ['sass'], function () {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlased: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function () {
   return del.sync('dist');
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('watch',['browser-sync', 'img', 'css-libs', 'scripts'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});



gulp.task('build', ['sass', 'scripts', 'watch'], function () {
    // gulp.task('build', ['clean', 'sass', 'scripts', 'watch'], function () {
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
        .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src(['app/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src(['app/js/**/*'])
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src(['app/*.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'scripts', 'watch', 'build']);
