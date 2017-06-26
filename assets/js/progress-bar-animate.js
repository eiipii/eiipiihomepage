/*
$(document).ready(function(){
    $(".progress-bar").removeClass("zero-width");
});
*/

// TODO animation. steps: 1 add zero-width class to every progress-bar; 2 make script below working, acting on slide load event
$('#carousel-personas').on('slide.bs.carousel', function () {
    console.log("it logs");
    $(".progress-bar").removeClass("zero-width");
});

