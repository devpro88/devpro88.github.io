// $("document").ready(function () {
// $('.for_sect2 .for_h2 h2').css('color', 'red !important').css("border", "3px solid red");
// });
// gulp.task('scripts', function () {
//     return gulp.src([
//         'app/libs/jquery/dist/jquery.min.js',
//         'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
//         'app/libs/bootstrap/dist/js/bootstrap.js',
//         'app/libs/angular/angular.js',
//         'node_modules/angular-material/angular-material.js',
//         'node_modules/angular-route/angular-route.js',
//         'app/js/common.js'
//     ])
//         .pipe(concat('libs.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'));
// });
// function rotateLeft() {
//     var angle = ($('.crop-img').data('angle')) || 0;
//     angle -= 45;
//     $('.crop-img').css({'transform': 'rotate(' + angle + 'deg)'});
//     $('.crop-img').data('angle', angle);
// }

window.onload = function () {
    // alert( 'Документ и все ресурсы загружены' );

    $(document).ready(function () {
        // $('.for_sect2 .for_h2 h2').hide();

        // $( ".for_terr_page" ).load(function() {
        //     $('h2').hide();
        // });
        // var myDiv = $('div').size();
        // alert(myDiv);
        // $( ".for_sect2 .for_h2 h2" ).load(function() {
        //     $('.for_sect2 .for_h2 h2').hide();
        // });
    });
};
// $( window ).load(function() {
//     // Run code
// });
// $(window).load(function() {
//     alert("window is loaded");
// });
var name = 'Ruslan';
console.log(name);
var lastName = 'Bondar';
console.log(lastName);