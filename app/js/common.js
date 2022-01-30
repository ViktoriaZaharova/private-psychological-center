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

$( document ).ready( function() {
    $( '.rental-office-slider' ).each( function() {
        $( this ).slick( {
            slidesToShow: 1,
            dots: true,
            appendArrows: $(this).parents('.rental-office-gallery').find('.rental-office-slider__nav'),
            appendDots: $(this).parents('.rental-office-gallery').find('.rental-office-slider__nav'),
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
        } );
    } );
} );

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.reviews-box .links-details').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.box-text').addClass('open');
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
    if(onBlock <= 0) {
        $('.btn-toggle').hide();
    }
});

$('.btn-toggle-post').on('click', function (e) {
    e.preventDefault();
    $('.post-box:hidden').slice(0, 2).slideDown();

    var onBlock = $('.post-box:hidden').length;
    if(onBlock <= 0) {
        $('.btn-toggle-post').hide();
    }
});