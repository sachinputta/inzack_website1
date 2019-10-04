jQuery(document).ready(function ($) {
    "use strict";
    /**  ------------ Maps -------------------
     **/
    /*---------------caro--------------*/

    var $direction;
    if ($('html').attr('dir') == 'rtl') {
        $direction = true;
    } else {
        $direction = false;
    }
    $('.carousel').slick({
        slidesToShow: 1,
        rtl: $direction,
        autoplay: true,
        autoplayTimeout: 5000,
    });

    var $Bitmnumber = $(".carousel_blog").data("numberitem");
    var $Bmargin = $(".carousel_blog").data("margin");
    $('.carousel_blog').slick({
        slidesToShow: $Pitmnumber,
        arrows: false,
        rtl: $direction,
        prevtArrow: '<i class="fa fa-chevron-left"></i>',
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        dots: false,
        slidesToScroll: elements_to_swipe,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    rtl: $direction,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    rtl: $direction,
                    slidesToShow: 1
                }
            }
        ]
    });

    var $Pitmnumber = $(".carousel_portfolio").data("numberitem");
    var $Pmargin = $(".carousel_portfolio").data("margin");
    $('.carousel_portfolio').slick({
        slidesToShow: $Pitmnumber,
        arrows: false,
        rtl: $direction,
        dots: false,
        slidesToScroll: elements_to_swipe,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    rtl: $direction,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    rtl: $direction,
                    slidesToShow: 1
                }
            }
        ]
    });




    $('.wd-gallery-images-holder').slick({
        slidesToShow: 1,
        rtl: $direction,
        arrows: false,
        prevtArrow: '<i class="fa fa-chevron-left"></i>',
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        nav: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.shop-carousel').slick({
        slidesToShow: 1,
        rtl: $direction,
        arrows: false,
        prevtArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // Clients Shortcode
    var navigation_style_slider = $('.team-member-slider').data('navigation');
    var navigation_style_carousel = $('.team-member-carousel').data('navigation');

    var elements_to_show_mobile = $('.team-member-carousel').data('showmobile');
    var elements_to_show_tablet = $('.team-member-carousel').data('showtablet');
    var elements_to_show_desktop = $('.team-member-carousel').data('showdesktop');

    var elements_to_swipe = $('.team-member-carousel').data('swipe');
    if (navigation_style_slider == "dotts") {
        $(window).on("load", function () {
            $('.team-member-slider').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 8000,
            });
        });

    }
    if (navigation_style_slider == "arrows") {
        $(window).on("load", function () {
            $('.team-member-slider').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 8000,
            });
        });
    }
    if (navigation_style_carousel == "arrows") {
        $(window).on("load", function () {
            // Team member Carousel
            $('.team-member-carousel').slick({
                slidesToShow: elements_to_show_desktop,
                arrows: false,
                dots: false,
                slidesToScroll: elements_to_swipe,
                autoplay: true,
                autoplaySpeed: 8000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerPadding: '40px',
                            slidesToShow: elements_to_show_tablet
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerPadding: '40px',
                            slidesToShow: elements_to_show_mobile
                        }
                    }
                ]
            });
        });
    }

    if (navigation_style_carousel == "dotts") {
        $(window).on("load", function () {
            // Team member Carousel
            $('.team-member-carousel').slick({
                slidesToShow: elements_to_show_desktop,
                arrows: false,
                dots: true,
                slidesToScroll: elements_to_swipe,
                autoplay: true,
                autoplaySpeed: 8000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerPadding: '40px',
                            slidesToShow: elements_to_show_tablet
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerPadding: '40px',
                            slidesToShow: elements_to_show_mobile
                        }
                    }
                ]
            });
        });

    }



// _______________Testimonial
    $('.testimonail-slik').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        nextArrow: '<span><i class="fa fa-chevron-right"></i></span>',
        prevArrow: '<span><i class="fa fa-chevron-left"></i></span>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //-------Start WD Client Carousel
    var client_show = $(".wd-clients-carousel").data("clientshow");


    $('.wd-clients-carousel').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: client_show,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //-------End WD Client Carousel


});