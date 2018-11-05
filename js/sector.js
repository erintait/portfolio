// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(document).ready(function () {
    'use strict';
    // Back to top smooth scroll

    jQuery('a.page-scroll').bind('click', function (event) {
//        jQuery('a.page-scroll.active').removeClass('active');
        var $anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top - 20
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });


    // Scroll to top animated button

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scroll-up').fadeIn();
        } else {
            jQuery('.scroll-up').fadeOut();
        }
    });


    // Highlight the top nav as scrolling occurs
    try{
	jQuery('body').scrollspy({
        target: '.navbar-fixed-top'
    });
	}catch(err){}
	
    // Closes the Responsive Menu on Menu Item Click
    jQuery('.navbar-collapse ul li a').click(function () {
        jQuery('.navbar-toggle:visible').click();
    });
    
		// Slider top
        jQuery('#myCarousel-one').carousel({
            interval: 9000, //changes the speed
            keyboard: false
        });


        //Team carousel

        jQuery('#myCarousel-two').carousel({
            interval: 4000, //changes the speed
            keyboard: false
        });

        //Clients carousel

        jQuery('#myCarousel-three').carousel({
            interval: 4000, //changes the speed
            keyboard: false
        });

        //Testimonials carousel

        jQuery('#myCarousel-four').carousel({
            interval: 8000, //changes the speed
            keyboard: false
        });
  

    /* Animated Titles of Sections*/

    function isScrolledIntoView(elem) {
        var docViewTop = jQuery(window).scrollTop();
        var docViewBottom = docViewTop + jQuery(window).height();

        var elemTop = jQuery(elem).offset().top;
        var elemBottom = elemTop + jQuery(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    (function () {
        var winDow = jQuery(window);
        var $container = jQuery('.portfolio-items');
        var $filter = jQuery('.filter');

        try {
            $container.imagesLoaded(function () {
                $container.show();
                try {
                    $container.isotope({
                        filter: '*',
                        layoutMode: 'masonry',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear'
                        }
                    });
                } catch (err) {
                }
            });
        } catch (err) {
        }

        winDow.bind('resize', function () {
            var selector = $filter.find('a.active').attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
            } catch (err) {
            }
            return false;
        });

        $filter.find('a').click(function () {
            var selector = jQuery(this).attr('data-filter');
            try {
                jQuerycontainer.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
            } catch (err) {
            }
            return false;
        });
    }(jQuery));


    /* Header shrink function*/
    var $positions;
    jQuery(document).scroll(function () {
		
        var scrollPos = jQuery(document).scrollTop();
        try {
            $positions = parseInt(jQuery('.main-top-slider').offset().top) + parseInt(jQuery('.main-top-slider').outerHeight()) - parseInt(jQuery('.navbar-default').outerHeight());
            if (scrollPos >= $positions) {
				
                jQuery(".navbar").addClass("navbar-shrink");
            } else {
                jQuery(".navbar").removeClass("navbar-shrink");
            }
        } catch (e) {
        }

         
        var scrollPos = jQuery(document).scrollTop();
        try {
            $positions = parseInt(jQuery('.inner-top-section').offset().top) + parseInt(jQuery('.inner-top-section').outerHeight()) - parseInt(jQuery('.navbar-default').outerHeight());
            if (scrollPos >= $positions) {
                jQuery(".navbar").addClass("navbar-shrink");
            } else {
                jQuery(".navbar").removeClass("navbar-shrink");
            }
        } catch (e) {

        }
    });
});
