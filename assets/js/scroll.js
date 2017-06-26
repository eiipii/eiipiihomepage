var homeBootonShow = function(){
    $("#animatedslide").addClass("animated fadeOutUp")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).remove();
        });
};
var runAnimation = function(){
    var run = function (id,onEnd) {
        var animation = "animated zoomInDown";
        $(id).removeClass("invisible")
            .addClass(animation)
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass(animation);
                if(onEnd) {
                    onEnd();
                }
            });
    };
    var runIconAnimation = function (after) {
        run('#icon1');
        setTimeout(function () {
            run('#icon2');
        }, 300);
        setTimeout(function () {
            run('#icon3');
        }, 600);
        setTimeout(function () {
            run('#icon4');
        }, 900);
        setTimeout(function () {
            run('#icon5',after);
        }, 1200);
    };
    runIconAnimation(function () {
        Typed.new('#devflow', {
            strings: ["Idea > Design > Code > Deploy > Enjoy > :)"],
            typeSpeed: 20,
            cursor: true
            // callback: runIconAnimation
        });
        homeBootonShow();
    });
};

$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".nav-scroll").addClass("top-nav-collapse");
    } else {
        $(".nav-scroll").removeClass("top-nav-collapse");
        runAnimation();
    }
});
$(function(){
    runAnimation();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-30
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});