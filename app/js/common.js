// menu
$(document).ready(function () {
    var header = $('.header-bottom'),
        scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();

        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });
});
// menu

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});

// mobile menu
$('.trigger-menu').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});