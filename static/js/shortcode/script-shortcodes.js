jQuery(document).ready(function ($) {
	"use strict";

	// COUNT UP
	$('.wd-count-up__counter').counterUp({
		delay: 10,
		time: 1000
	});


	// Parallax
	var $window = jQuery(window);

	jQuery('.parallax').each(function () {
		var $scroll = $(this);

		jQuery(window).on("scroll", function () {
			var yPos = -($window.scrollTop() / $scroll.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$scroll.css({backgroundPosition: coords});
		});
	});
});



