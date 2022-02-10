// menu
$(document).ready(function () {
    var header = $('.header-bottom'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
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

// slider
$('.blog-slider').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    dots: true,
    variableWidth: true,
    appendArrows: '.reviews-slider__nav',
    appendDots: '.reviews-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
            }
        }
    ]
});

$('.address-filial-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.address-filial-slider__nav',
    appendDots: '.address-filial-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }
    ]
});

$(document).ready(function () {
    $('.rental-office-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            dots: true,
            appendArrows: $(this).parents('.rental-office-gallery').find('.rental-office-slider__nav'),
            appendDots: $(this).parents('.rental-office-gallery').find('.rental-office-slider__nav'),
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });

    $('.reviews-card-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            appendArrows: $(this).parents('.reviews-card').find('.reviews-card-slider__nav'),
            appendDots: $(this).parents('.reviews-card').find('.reviews-card-slider__nav'),
            prevArrow: '<button type="button" class="slick-prev slick-nav-btn"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-nav-btn"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        }).slickAnimation();
    });

    $('.specialist-reviews-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            appendArrows: $(this).parents('.card-body').find('.specialist-reviews-slider__nav'),
            appendDots: $(this).parents('.card-body').find('.specialist-reviews-slider__nav'),
            prevArrow: '<button type="button" class="slick-prev slick-nav-btn"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-nav-btn"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        }).slickAnimation();
    });

    $('.slick-nav-btn').on('click touch', function(e) {

        e.preventDefault();

        var arrow = $(this);

        if(!arrow.hasClass('animate')) {
            arrow.addClass('animate');
            setTimeout(() => {
                arrow.removeClass('animate');
            }, 1000);
        }

    });

});

$('.certificate-slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});

$('.accordion').on('show.bs.collapse', function (e) {
    $('.slick-slider').slick('refresh');
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.nav-tabs-rental:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows: false,
        });
    } else {
        $(".nav-tabs-rental.slick-initialized").slick("unslick");
    }
});
// slick active

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.reviews-box .links-details').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.box-text').addClass('open');
});

$('.links-details-reviews').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.box-text').addClass('open');
    $(this).hide();
});

//Табы
(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);


$('.tabs-toggle').on('click', function () {
    $(this).toggleClass('click').next('.tabs__content').slideToggle();
});
// end


$('.btn-toggle').on('click', function (e) {
    e.preventDefault();
    $('.psychologists-card-col:hidden').slice(0, 4).slideDown();

    var onBlock = $('.psychologists-card-col:hidden').length;
    if (onBlock <= 0) {
        $('.btn-toggle').hide();
    }
});

$('.btn-toggle-post').on('click', function (e) {
    e.preventDefault();
    $('.post-box:hidden').slice(0, 2).slideDown();

    var onBlock = $('.post-box:hidden').length;
    if (onBlock <= 0) {
        $('.btn-toggle-post').hide();
    }
});

// forms step
$('.btn-next-step').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.form-step').next('.form-step').addClass('active');
});

$('.radio-specialist').on('click', function () {
    $('.form-step').removeClass('active');
    $(this).parents('.form-step').next('.form-step').addClass('active');
    $('.links-prev').css('opacity', 1);
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});

$('.links-prev').on('click', function (e) {
    e.preventDefault();
    $('.form-step.active').removeClass('active').prev('.form-step').addClass('active');
    $(this).css('opacity', 0);
});
// forms step end

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end
