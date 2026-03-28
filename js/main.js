$(function () {

    var mixer = mixitup('.directions__list')

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        appendArrows: $(".team__slider-arrows"),
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,

                    }
                }
            ]
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })


    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $(".testimonials__dots"),

    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideToggle()
    })

    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top - 100
        });
        return false;
    });

    setInterval(() => {
        if ($(window).scrollTop() > $(window).height() - 20 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        }
        else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);



    $('.burger, .overlay, .header__top a').on('click', function (e) {
        e.preventDefault()
        $('.burger').toggleClass('burger--active')
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })
        

    $('.footer__top-title--slide').on('click', function () {
        $(this).next().slideToggle()
    })

})