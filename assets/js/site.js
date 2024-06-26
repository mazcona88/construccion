"use strict";
var isMobile;
$(document).ready(function() {

	var sliderObj;
	isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/);

	$(".loader-item").delay(600).fadeOut();
	$("#pageloader").delay(700).fadeOut(500);

	$(".nav-button").on('click', function() {
		$(".navigation").toggle(100);
	});

	sliderObj = $('#bottom-sec').bxSlider({
		mode : 'horizontal',
		pager : false,
		controls : true,
		auto : false,
		speed : 400,
		easing : 'easeInExpo',
		infiniteLoop : true,
		useCSS : false
	});

	$('.top-banner').bxSlider({
		mode : 'vertical',
		pager : false,
		speed : 1000,
		easing : 'swing',
		onSliderLoad : function() {
			$('.top-row strong').css('display', 'none');
			$('.top-row strong').eq(0).css('display', 'block');

		},
		onSlideNext : function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {

			sliderEffect(currentSlideHtmlObject);
			$('.detail .bx-next').trigger('click');

		},
		onSlidePrev : function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {

			sliderEffect(currentSlideHtmlObject);
			$('.detail .bx-prev').trigger('click');
		}
	});

	$('.pro-slider').bxSlider({
		mode : 'horizontal',
		pager : false,
		nextText : 'NEXT PROJECT',
		prevText : 'PREVIOUS PROJECT'
	});

	$('.msg-slider ul').bxSlider({
		mode : 'horizontal',
		pager : false
	});

	$('.project-slider').bxSlider({
		mode : 'fade',
		pager : false,
		auto : false
	});

	$('.testimonial-slider').bxSlider({
		speed : 600,
		auto : true,
		useCSS : false,
		easing : 'easeInExpo'
	});

	$('.office-slider').bxSlider({
		mode : 'fade',
		pager : false
	});

	$('.team-slider').bxSlider({
		pager : false,
		minSlides : 1,
		maxSlides : 3,
		slideWidth : 360,
		slideMargin : 30
	});

	$('.prv').on('click', function() {
		$('.bx-prev').trigger('click');
	});

	$('.next').on('click', function() {
		$('.bx-next').trigger('click');
	});

	$(window).on('scroll', function() {
		//var b = $('#header').attr('class');
		var posScroll = $(window).scrollTop();
		var primaryH = $('.primary-header').outerHeight();

		if (posScroll > primaryH) {

			$('#header').addClass('fix');
		} else {
			$('#header').removeClass('fix');
		}

		if (!isMobile) {
			animSection();
			fadeInSection();
			if ($('.parallax').length) {
				$('.parallax').each(function() {
					parallax($(this), 0.1);
				});
			}
		}

	})
	//Svg Function
	$('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if ( typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if ( typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	//Custom Map
	// if ($('#map').length) {
	// var map = new GMaps({
	// div : '#map',
	// lat : 41.402619,
	// lng : -74.333062,
	// disableDefaultUI : true,
	// zoom : 17,
	// scrollwheel : false
	// });
	// map.drawOverlay({
	// lat : map.getCenter().lat(),
	// lng : map.getCenter().lng(),
	// content : '<a href="#" class="mapmarker"><i class="fa fa-map-marker"><img src="assets/svg/map-pin.svg" alt="" class="svg" /></i></a>',
	// verticalAlign : 'top',
	// horizontalAlign : 'center'
	// });
	//
	// if ($(window).width() >= 1200) {
	// map.setOptions({
	// //styles : Site.styles,
	// center : new google.maps.LatLng(41.401836, -74.329801),
	// });
	// } else if ($(window).width() >= 992) {
	// map.setOptions({
	// styles : Site.styles,
	// center : new google.maps.LatLng(41.401836, -74.331801),
	// });
	// } else if ($(window).width() >= 768) {
	// map.setOptions({
	// styles : Site.styles,
	// center : new google.maps.LatLng(41.401836, -74.329801),
	// });
	// } else {
	// map.setOptions({
	// styles : Site.styles,
	// center : new google.maps.LatLng(41.400136, -74.332562),
	// });
	// }
	// }

	if (!isMobile) {
		animSection();
		fadeInSection();

	}

	// if($('#header').hasClass('intelligent')){
	// $('#slider').addClass('top');
	// }

});

$(window).load(function() {

	if ($('.parallax').length) {
		$('.parallax').each(function() {
			parallax($(this), 0.1);
		})
	}

	$('#carousel').flexslider({
		animation : "slide",
		controlNav : false,
		animationLoop : false,
		slideshow : false,
		itemWidth : 223,
		itemMargin : 5,
		startAt : 0,
		asNavFor : '#slide-items'

	});

	$('#slide-items').flexslider({
		animation : "fade",
		controlNav : false,
		animationLoop : false,
		slideshow : false,
		sync : "#carousel",
		startAt : 0,
		start : function(slider) {
			$('body').removeClass('loading');
		}
	});
	// testimonial-container Section Silder

	$('#testimonial-carousel').flexslider({
		animation : "slide",
		controlNav : false,
		animationLoop : false,
		slideshow : true,
		itemWidth : 63,
		itemMargin : 5,
		asNavFor : '#testimonial-silder'

	});

	$('#testimonial-silder').flexslider({
		animation : "slide",
		controlNav : false,
		animationLoop : false,
		slideshow : true,
		sync : "#testimonial-carousel",
		start : function(slider) {
			$('body').removeClass('loading');
		}
	});

});

var parallax = function(id, val) {

	if ($(window).scrollTop() > id.offset().top - $(window).height() && $(window).scrollTop() < id.offset().top + id.outerHeight()) {
		var px = parseInt(($(window).scrollTop() - (id.offset().top - $(window).height())), 10);

		px *= -val;
		id.css({
			'background-position' : 'center ' + px + 'px'
		})
	}
}
var animSection = function() {
	$('.anim-section').each(function() {
		if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.15)) {
			$(this).addClass('animate');
		} else {
			$(this).removeClass('animate');
		}
	});
}
var fadeInSection = function() {
	$('.fadeIn-section').each(function() {
		if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.15)) {
			$(this).addClass('fadeIn');
		}
	});
}
function sliderEffect(index) {
	$('.top-row strong').eq(index).fadeIn(1000);
	$('.top-row strong').eq(index).siblings('strong').fadeOut(1000);

}
