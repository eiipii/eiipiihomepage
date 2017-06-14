//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".nav-scroll").addClass("top-nav-collapse");
    } else {
        $(".nav-scroll").removeClass("top-nav-collapse");
        var runIconAnimation = function (after) {
            $('#icon1').addClass("animated zoomInDown");
            $('#icon1').removeClass("start");
            setTimeout(function () {
                $('#icon2').addClass("animated zoomInDown");
                $('#icon2').removeClass("start");
            }, 300);
            setTimeout(function () {
                $('#icon3').addClass("animated zoomInDown");
                $('#icon3').removeClass("start");
            }, 600);
            setTimeout(function () {
                $('#icon4').addClass("animated zoomInDown");
                $('#icon4').removeClass("start");
            }, 900);
            setTimeout(function () {
                $('#icon5').addClass("animated zoomInDown");
                $('#icon5').removeClass("start");
                after();
            }, 1200);
        };
        var runIconAnimationJquery = function () {
            var speed = 600;
            $('#icon1c').fadeTo(speed, 1);
            $('#icon1').fadeTo(speed, 1, function () {
                $('#icon2').fadeTo(speed, 1, function () {
                    $('#icon3').fadeTo(speed, 1, function () {
                        $('#icon4').fadeTo(speed, 1, function () {
                            $('#icon5c').fadeTo(speed, 1);
                            $('#icon5').fadeTo(speed, 1, function () {
                                console.log("done");
                            })
                        })
                    })
                })
            });
        };
        runIconAnimation(function(){
            Typed.new('#devflow', {
                strings: ["Idea > Design > Code > Deploy > Enjoy > :)"],
                typeSpeed: 20,
                cursor: true
                // callback: runIconAnimation
            });
        });

    }
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});