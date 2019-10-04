jQuery(document).ready(function ($) {
    "use strict";
    function osteriskParallax() {
        var n = $(window).scrollTop()
            , t = $(window).width();
        t >= 980 ? $(".has-parallax").each(function () {
            var t = ($(this).offset().top - n) * .25 + "px";
            $(this).css({
                transform: "translate(0," + t + ")"
            })
        }) : $(".has-parallax").each(function () {
            $(this).css({
                transform: "translate(0px,0px)"
            })
        })
    }

    $(window).on("scroll", function () {
        osteriskParallax();
    });
    $(window).on("resize", function () {
        osteriskParallax()
    });


    $(document).foundation();


    var wd_obj = {
        body: $('body'),
        another: 'woof'
    };


    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    if (!isMobile.any()) {


        /*_________________________________ Waypoints ___________________*/
        $('.animated').css('opacity', 0);
        $('.animated').each(function () {
            $(this).addClass($(this).data('animated'));
        });

        //___________ animate Element when it visible
        $(".animated").parents(".animated-section").waypoint(function () {
                var e = $(this).find(".animated").length ? $(this).find(".animated") : $(this);
                var animated_item = $(this).find(".animated-item");

                var tl = new TimelineMax();
                tl.to( animated_item, 0, {y:200});

                tl.staggerTo(e, .5, {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationZ: "0deg",
                    rotationX: "0deg",
                    rotationY: "0deg",
                }, .15);

                animated_item.each(function( index ) {
                    TweenMax.to( $(this), .8, {y:0, delay: function() { return (index+1) * 500; }, ease:Power2.easeOut});
                });

            },
            {offset: '80%'});

        $(".wpb_animate_when_almost_visible").parents(".vc_row").waypoint(function () {
                var e = $(this).find(".wpb_animate_when_almost_visible").length ? $(this).find(".wpb_animate_when_almost_visible") : $(this);

                TweenMax.staggerTo(e, .5, {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationZ: "0deg",
                    rotationX: "0deg",
                    rotationY: "0deg",
                }, .15)
            },
            {offset: '80%'});
    } else {
        $("div").removeClass('wpb_animate_when_almost_visible');
        $('.animated').css('opacity', 1);
    }


    $(".image").on('click', function (e) {
        var url_image = '.' + $(this).data('url');
        $('.wd-all-image > div').addClass('wd-hide');
        $(url_image).removeClass('wd-hide');
        $(".image").removeClass('active');
        $(this).addClass('active');
    });


    /*************************** Lists ****************************************/
    var classList;
    var sectionclass;
    $(".list-icon li").each(function (index) {
        classList = $(this).parent().attr('class').split(/\s+/);
        var iconclass = classList[1].replace('list-', '');

        $(this).prepend('<i class="fa ' + iconclass + '"></i>');
    });


    $(".show-cart-btn").hoverIntent({
        over: cartover,
        out: cartout,
        timeout: 500
    });

    function cartover() {
        $('.hidden-cart')
            .stop(true, true)
            .fadeIn({duration: 500, queue: false})
            .css('display', 'none')
            .slideDown(500);
    }

    function cartout() {
        $('.hidden-cart')
            .stop(true, true)
            .fadeOut({duration: 100, queue: false})
            .slideUp(100);
    }


    $("hidden-cart").on("mouseover", function () {
        $(this).css("display", "block");
    });

    $("hidden-cart").on("mouseover", function () {
        $(this).css("display", "none");
    });


    /* World Map Triggers to Popup */

    var offices_location = jQuery('.offices-locations'),
        offices_list = jQuery('.offices-list'),
        office_location_point = offices_location.children('.office-location-point'),
        offices_list_name = offices_list.find('.location-name'),
        clicked;

    office_location_point.each(function (index, el) {
        var $el = jQuery(el);
        $el.css({
            top: parseInt($el.attr('data-positiontop')),
            left: parseInt($el.attr('data-positionleft'))
        })
            .on('mouseover', function () {
                offices_list.find("[data-location='" + $el.attr('data-location') + "']").addClass('selected');
            })
            .on('mouseout', function () {
                offices_list_name.removeClass('selected');
            });
        ;
    });

    offices_list_name.on('mouseover', function () {
        offices_location.find("[data-location='" + jQuery(this).attr('data-location') + "']").addClass('selected');
    })
        .on('mouseout', function () {
            office_location_point.removeClass('selected');
        });



    //////////////////  Spacer //
    if ($('.wd_empty_space').length) {

        $('.wd_empty_space').each(function (i, obj) {
            wd_empty_space_padding(this);
        });

        window.addEventListener('resize', function () {
            $('.wd_empty_space').each(function (i, obj) {
                wd_empty_space_padding(this);
            });
        }, true);
    }

    function wd_empty_space_padding(el) {
        var $mobile_height = $(el).data("heightmobile"),
            $tablet_height = $(el).data("heighttablet"),
            $desktop_height = $(el).data("heightdesktop");

        if (Modernizr.mq("(max-width: 40em)")) {
            $(el).css("height", $mobile_height);
        } else if (Modernizr.mq("(min-width: 40.063em) and (max-width: 64em)")) {
            $(el).css("height", $tablet_height);
        } else if (Modernizr.mq("(min-width: 64.063em)")) {
            $(el).css("height", $desktop_height);
        }
    }

    //////////////// Delimiter /////
    if ($('.row-delimiter').length) {

        $('.row-delimiter').each(function (i, obj) {
            wd_delimiter_transform(this);
        });

        window.addEventListener('resize', function () {
            $('.row-delimiter').each(function (i, obj) {
                wd_delimiter_transform(this);
            });
        }, true);
    }

    function wd_delimiter_transform(el) {
        var left = '920';
        if ($(el).hasClass('vertical_line_bottom_left')) {
            left = parseInt($(el).parent().css('width')) / 2;
        } else if ($(el).hasClass('vertical_line_bottom_right')) {
            left = parseInt($(el).parent().css('width')) + parseInt($(el).parent().css('left'));
        } else {
            left = parseInt($(el).parent().css('left')) * -1;
        }

        $(el).css('transform', 'translateY(100%) translateX(' + left + 'px)');
    }


//___________ Portfolio Grid Isotope


    window.onload = function () {

        if ($('.wd-portfolio-grid').length) {
            $('.wd-portfolio-grid').each(function (i, obj) {
                portfolio_grid_setting(this);
            });
        }

        function portfolio_grid_setting(el) {
            var $admiral_portfolio_grid = $(el).isotope({
                itemSelector: '.wd-portfolio-grid-item',
                layoutMode: 'fitRows'
            })

            $('.filters').on('click', 'a', function (e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $(".filters a").removeClass('current');
                $(this).addClass('current');
                $admiral_portfolio_grid.isotope({filter: filterValue});
            });
        }


        if ($('.wd-portfolio-masonry').length) {
            $('.wd-portfolio-masonry').each(function (i, obj) {
                portfolio_masonry_setting(this);
            });
        }

        function portfolio_masonry_setting(el) {

            var $admiral_portfolio_masonry = $(el).isotope({
                itemSelector: '.wd-portfolio-masonry-item'
            })

            $('.filters').on('click', 'a', function (e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $(".filters a").removeClass('current');
                $(this).addClass('current');
                $admiral_portfolio_masonry.isotope({filter: filterValue});
            });
        }


        if ($('.wd-portfolio-masonry-free-style.style-1').length) {
            $('.wd-portfolio-masonry-free-style.style-1').each(function (i, obj) {
                portfolio_masonry_free_style_1_setting(this);
            });
        }

        function portfolio_masonry_free_style_1_setting(el) {

            var $admiral_portfolio_masonry = $(el).isotope({
                itemSelector: '.wd-portfolio-masonry-item'
            })

            $('.filters').on('click', 'a', function (e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $(".filters a").removeClass('current');
                $(this).addClass('current');
                $admiral_portfolio_masonry.isotope({filter: filterValue});
            });
        }

        // border Width Responsive

        $('.pricing-table-header').data('border', ($('.pricing-table-header').width() / 2) + 'px');

        if ($('.wd-portfolio-masonry-free-style.style-2').length) {
            $('.wd-portfolio-masonry-free-style.style-2').isotope('destroy');
            $('.wd-portfolio-masonry-free-style.style-2').each(function (i, obj) {
                portfolio_masonry_free_style_2_setting(this);
            });
        }

        function portfolio_masonry_free_style_2_setting(el) {
            var $container = $(el);
            var $containerProxy = $container.clone().empty().css({visibility: 'hidden'});
            var colWidth;

            $container.after($containerProxy);

            $(window).resize(function () {
                colWidth = Math.floor($containerProxy.width() / 4);
                $container.css({
                    width: colWidth * 4
                })
                $container.isotope({
                    resizable: false,
                    itemSelector: '.wd-portfolio-masonry-item',
                    masonry: {
                        columnWidth: colWidth
                    }
                });
            }).resize();


            $(window).on("load", function () {
                $container.isotope('layout');
            });

            var filtertoggle = jQuery('body');

            $(window).on("load", function () {
                $container.isotope('layout');
                $(function () {
                    setTimeout(function () {
                        $container.isotope('layout');
                    }, filtertoggle.hasClass("") ? 755 : 755);
                });
            });


            $(window).on("resize", function () {
                $container.isotope('layout');
                $(function () {
                    setTimeout(function () {
                        $container.isotope('layout');
                    }, filtertoggle.hasClass("") ? 755 : 755);
                });
            });


            $('.filters').on('click', 'a', function (e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $(".filters a").removeClass('current');
                $(this).addClass('current');
                $admiral_portfolio_masonry.isotope({filter: filterValue});
            });
        }

        // Add To Cart Button
        $('.quick_view').text('');

        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            }
            else {
                return decodeURI(results[1]) || 0;
            }
        }
        if ($.urlParam('display') == 'list') {
            $('ul.products').addClass('list');
        }

    };



    //Get Sale Prices
    $(window).on('load', function () {
        $('ul.products li.sale').each(function () {
            if ($(this).find('span.price del span').length > 0) {
                var oldPrice = $(this).find('span.price del span').text(),
                    oldPriceVal = oldPrice.substr(1, (oldPrice.length - 5)),
                    newPrice = $(this).find('span.price ins span').text(),
                    newPriceVal = newPrice.substr(1, (newPrice.length - 5)),
                    Result = Math.round((1 - (newPriceVal / oldPriceVal)) * 100) + '%';
                $(this).append("<span class='promo-value'><span class='the-value'>" + Result + "</span></span>");
            }
        });

    })


// init Isotope
    var $grid = $('.portfolio-grid-items');
    $(window).load(function() {

            $('.filters').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                $grid.isotope({filter: filterValue});
            });

            // change is-checked class on buttons
            $('.button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
});

    $('.portfolio-layout-3').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        resizable: true,
        percentPosition: true,
        masonry: {
            columnWidth: 100,
            gutter: 10,
            fitWidth: true
        }
    });

  if ($('.portfolio-layout-3').length) {
    $('.portfolio-layout-3').isotope('destroy');
    $('.portfolio-layout-3').each(function (i, obj) {
      portfolio_masonry_free_style_2_setting(this);
    });
  }

  function portfolio_masonry_free_style_2_setting(el) {
    var $container = $(el);
    var $containerProxy = $container.clone().empty().css({visibility: 'hidden'});
    var colWidth;

    $container.after($containerProxy);

    $(window).on("resize", function () {
      colWidth = Math.floor($containerProxy.width() / 3);
      $container.css({
        width: colWidth * 3
      })
      $container.isotope({
        resizable: false,
        itemSelector: '.element-item',
        masonry: {
          columnWidth: colWidth
        }
      });
    }).resize();


    $(window).on("load", function () {
      $container.isotope('layout');
    });

    var filtertoggle = jQuery('body');

    $(window).on("load", function () {
      $container.isotope('layout');
      $(function () {
        setTimeout(function () {
          $container.isotope('layout');
        }, filtertoggle.hasClass("") ? 755 : 755);
      });
    });


    $(window).on("resize", function () {
      $container.isotope('layout');
      $(function () {
        setTimeout(function () {
          $container.isotope('layout');
        }, filtertoggle.hasClass("") ? 755 : 755);
      });
    });

  }
  if ($('.portfolio-layout-4').length) {
    $('.portfolio-layout-4').isotope('destroy');
    $('.portfolio-layout-4').each(function (i, obj) {
      portfolio_masonry_free_style_4_setting(this);
    });
  }

    $(function () {
        $(' .portfolio-grid-items > li ').each(function () {
            $(this).hoverdir();
        });
    });

});