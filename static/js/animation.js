jQuery(document).ready(function ($) {
	"use strict";

	var wd_obj = {
		body: $('body'),
		another: 'woof'
	};

	//   Smooth page transition
	if (wd_obj.body.hasClass("wd_page_transitions")) {
		var ctrlKey = false;
		$(document).on('keyup keydown', function (e) {
			ctrlKey = e.ctrlKey;
		});
		var i = $("a");
		i.on("click", function (e) {
			// control-click
			if (ctrlKey) {
				return
			} else {
				var a = $(this);
				if (a.attr("href").split("#")[0] !== window.location.href.split("#")[0] && a.attr("href").charAt(0) !== "#") {
					e.preventDefault()
					$('body').css('overflow-y', 'auto');
					$('.page-loading').fadeIn(800, "easeInOutCirc");
					TweenMax.to($('.page-loading .double-bounce1'),.3,{scale: 1});
					TweenMax.to($('.page-loading .double-bounce1'),.3,{
						//animation:'sk-bounce 2.0s infinite ease-in-out;',
						animationName: 'sk-bounce',
						animationDuration: '2s',
						animationIterationCount: 'infinite',
						animationTimingFunction: 'ease-in-out',
					});
					$('#spaces-main').fadeOut(800, "easeInOutCirc", function () {
						window.location = a.attr("href")
					})
				}
			}
		})
	}

	// Remove page loading animation
	setTimeout(function(){
        TweenMax.to($('.page-loading .double-bounce1'),.3,{animation:'none',scale: 30});
        //TweenMax.to($('.page-loading'),.8, {autoAlpha:0,display:"none"});
		$('.page-loading').fadeOut(800, "easeInOutCirc");

		$('body').css('overflow-y', 'auto');

		//TweenMax.from($('#spaces-main'),.8,{ top:'20%', opacity:1, scale: 1.1, ease:Power2.easeOut});
		TweenMax.from($('#page-title'),1,{ top:-200, opacity:0.5, scale: 3, transform:'rotate3d(1, 0, 0, 45deg)', ease:Power2.easeOut, delay:.2});
	}, 1700);




	//======================= images parallax ========================

	function parallaxIt(target, movement) {
		TweenMax.to(target, 0.3, {
			x: (mouse.x - rect.width / 2) / rect.width * movement,
			y: (mouse.y - rect.height / 2) / rect.height * movement
		});
	}
	if ( $( '.screenshot' ).length ) {
		var rect = $('.screenshot')[0].getBoundingClientRect();
		var mouse = {x: 0, y: 0, moved: false};

		$(".screenshot").parent( ".vc_row" ).mousemove(function(e) {
			mouse.moved = true;
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		});

		// Ticker event will be called on every frame
		TweenLite.ticker.addEventListener('tick', function(){
			if (mouse.moved){
				parallaxIt(".screenshot1", -50);
				parallaxIt(".screenshot2", -40);
				parallaxIt(".screenshot3", -30);
			}
			mouse.moved = false;
		});

		$(window).on('resize scroll', function(){
			rect = $('.screenshot')[0].getBoundingClientRect();
		})

		//___________ animate Element when it visible
		$('.screenshot').waypoint(function () {
				if( !$(this).hasClass('animated') ){
					TweenMax.fromTo($('.screenshot1'), .8, {top:'100%', opacity:0, ease:Power2.easeOut}, {top: 0, opacity:1});
					TweenMax.fromTo($('.screenshot2'), 1.2, {top:'100%', opacity:0, ease:Power2.easeOut}, {top: '10%', opacity:1});
					TweenMax.fromTo($('.screenshot3'), 1.6, {top:'100%', opacity:0, ease:Power2.easeOut}, {top: '19%', opacity:1});
				}

				$(this).addClass('animated');
			},
			{offset: '80%'});
	}






	//======================= SVG animation ==========================
	jQuery('.text-icon').hover(
		function () {
			TweenMax.to(this,.3,{overflow: 'hidden'});
			TweenMax.to($(this).find('svg'),.3,{overflow: 'visible'});
			TweenMax.to($(this).find('svg circle'),.3,{scale:4, opacity: .08, transformOrigin:"0% 0%"});
		}, function() {
			TweenMax.to($(this).find('svg circle'),.3,{scale:1, opacity: 1});
		}
	);




	//======================= hide & show Header on scroll =========================
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".top-bar-container.sticky").addClass("fixed");
		} else {
			$(".top-bar-container.sticky").removeClass("fixed");
		}
	});
	function osterisk_hasScrolled() {
		"use strict";
		var l = jQuery(window).scrollTop();
		Math.abs(lastScrollTop - l) <= scrollAmount || (l > lastScrollTop && l > navbarHeight ? jQuery(".slideUp").css({top: -jQuery(window).outerHeight()}) : l + jQuery(window).height() < jQuery(document).height() && jQuery(".slideUp").css({top: 0}), lastScrollTop = l)

	}

	var jQuerywindow = jQuery(window),
		didScroll, lastScrollTop = 0, scrollAmount = 10,
		navbarHeight = jQuery(".slideUp").outerHeight();
	jQuery(window).scroll(function (l) {
		didScroll = !0
	}), setInterval(function () {
		didScroll && (osterisk_hasScrolled(), didScroll = !1)
	}, 250);

});