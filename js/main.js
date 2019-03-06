/*
 * This file is for all javascript code used on page.
 * 
 */
jQuery(document).ready(function () {
	"use strict";
	jQuery.noConflict();
	
	// Banner Height
	jQuery(window).resize(function(){
		if(jQuery(window).width() >= 993){
			jQuery('.banner-part , .video-banner-part').height(jQuery(window).height() + "px");
		}else{
			jQuery('.banner-part , .video-banner-part').height((jQuery(window).height()- jQuery('#main-header').outerHeight()) + "px");
			jQuery('.video-banner-part').css("height","auto");
		}
	}).trigger('resize');
	// For Parallax Js
	try{
		jQuery('.banner-area').parallax('50%','.3');
		jQuery('.my-skills-area').parallax('50%','.3');
		jQuery('.parallax-small').parallax('50%','.3');	
	}catch (exe){
	}
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	jQuery(function() {
		jQuery('a.page-scroll').bind('click', function(event) {
			var $anchor = jQuery(this);
			jQuery('html, body').stop().animate({
				scrollTop: jQuery($anchor.attr('href')).offset().top - 50
			}, 1500, 'easeInOutExpo');			
			event.preventDefault();
		});
		
		jQuery(window).scroll(function () {
			onScrollHandle();
		});
		function onScrollHandle() {
			//Navbar shrink when scroll down
			//jQuery(".navbar-default").toggleClass("navbar-shrink", jQuery(this).scrollTop() > 50);
			//Get current scroll position
			var currentScrollPos = jQuery(document).scrollTop();
			//Iterate through all node
			jQuery('.navbar-nav li > a').each(function () {
				var curLink = jQuery(this);
				var $lk = curLink.attr('href');
				if($lk.indexOf("#") > -1 && $lk.length > 1){
					var refElem = jQuery(curLink.attr('href'));			
                    //Compare the value of current position and the every section position in each scroll
					if (refElem.position().top <= currentScrollPos + 75 && refElem.position().top + refElem.height() + 50 > currentScrollPos) {
						//Remove class active in all nav
						jQuery('.navbar-nav > li').removeClass("active");
						//Add class active
						curLink.parent().addClass("active");
					}
					else {
						curLink.parent().removeClass("active");
					}
				}
			});
		}
		
	});
	
	//<!-- Header One -->
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 1){  
                jQuery('#header').addClass("sticky");
            }
            else{
                jQuery('#header').removeClass("sticky");
            }
        });
	
	
// Carousel Feature Slide
    var owlCrouselFeatureSlide = function (owlmainslider) {
        try {
            owlmainslider.on('initialized.owl.carousel change.owl.carousel', function (elem) {
                var current = elem.item.index;
                jQuery(elem.target).find(".owl-item").find(".to-animate").removeClass('fadeInLeft animated');
                jQuery(elem.target).find(".owl-item").find(".to-animate-2").removeClass('fadeInRight animated');
            });
            owlmainslider.on('initialized.owl.carousel changed.owl.carousel', function (elem) {
                setTimeout(function () {
                    var current = elem.item.index;
                    jQuery(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInLeft animated');
                }, 700);
                setTimeout(function () {
                    var current = elem.item.index;
                    jQuery(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInRight animated');
                }, 900);
            });
            owlmainslider.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                responsiveClass: true,
                // animateOut: 'fadeOut',
                nav: true,
                dots: true,
                //autoHeight: true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsiveRefreshRate: 5,
                navText: [
                    "<i class='fa fa-long-arrow-left'></i>",
                    "<i class='fa fa-long-arrow-right'></i>"
                ]
            });
        } catch (err) {
        }
    };

    setTimeout(function () {
        jQuery('body').addClass('loaded');
        /* Scroll to hashtag */
        if (window.location.hash) {
            // smooth scroll to the anchor id
            jQuery('html, body').animate({
                scrollTop: jQuery(window.location.hash).offset().top
            }, 1000, 'swing');
        }
    }, 3000);

    if (!window.location.hash) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 1000, 'swing');
    }

    var owlmainslider = jQuery('#main-slider');
    owlCrouselFeatureSlide(owlmainslider);

    //This code is for main navigation hover effect
    jQuery('ul.nav li.dropdown').hover(function () {
        if (jQuery(window).width() > 992) {
            jQuery(this).find('.dropdown-menu').stop(true, false).delay(200).fadeIn(500);
        }
    }, function () {
        if (jQuery(window).width() > 992) {
            jQuery(this).find('.dropdown-menu').stop(true, false).delay(200).fadeOut(500);
        }
    });

    jQuery(".dropdown-toggle .caret").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery(this).closest("li").find(".dropdown-menu").slideToggle();
        
        return false;
    });

// Navigation hover effect
    try {
        var vid = document.getElementById("video_block");
        vid.onloadeddata = function () {
            jQuery('#video-image').fadeOut(1000);
            jQuery('#full-video-section').css({'z-index': ''});
        };
        vid.ontimeupdate = function () {
            jQuery('#video-image').fadeOut(1000);
            jQuery('#full-video-section').css({'z-index': ''});
        };
    } catch (e) {
    }
	
	try {
        var vid = document.getElementById("video_banner_block");
        vid.onloadeddata = function () {
            jQuery('#video-banner-image').fadeOut(1000);
            jQuery('#full-banner-video-section').css({'z-index': ''});
        };
        vid.ontimeupdate = function () {
            jQuery('#video-banner-image').fadeOut(1000);
            jQuery('#full-banner-video-section').css({'z-index': ''});
        };
    } catch (e) {
    }
	
	
// ANIMATION SCRIPT
    new WOW().init();
    
    jQuery(document).find('.owl-carousel').addClass("owl-theme");

// VIDEO, AUDIO SCRIPT
    try {
        jQuery('video,audio').mediaelementplayer(/* Options */);
    } catch (err) {
    }

    try {
        rotate('rotate1');
    } catch (err) {
    }

    // PORTFOLIO SCRIPT
    try {
        jQuery("#project-wrapper").mixItUp();
    } catch (err) {
    }
    // TEAM SLIDER SCRIPT
    try {
        jQuery('#team-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    } catch (err) {
    }

    // TESTIMONIAL SLIDER SCRIPT
    try {
        jQuery('#testimonials-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            autoHeight: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    } catch (err) {
    }

    // BLOG SLIDER SCRIPT
    try {
        jQuery('#blog-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    } catch (err) {

    }

    // PORTFOLIO SCRIPT
    try {
        jQuery('#myModal').on('shown.bs.modal', function (e) {
            jQuery('#portfolio-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        });
    } catch (err) {

    }

    //BLOG POST SLIDER SCRIPT
    try {
        jQuery('#post-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            dots: false,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ]
        });
    } catch (err) {

    }

    //BLOG SIDEBAR TESTIMONIAL SCRIPT
    try {
        jQuery('#testimonials-single-carousel').owlCarousel({
            loop: true,
            margin: 1,
            nav: false,
            items: 1,
            dots: true,
            autoHeight: true
        });
    } catch (err) {

    }


    try {
        //GOOGLE MAP SCRIPT
        var map;
        var myLatLng = new google.maps.LatLng(37.6369985, -97.3662159)
        var myOptions = {
            zoom: 16,
            center: myLatLng,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [{
                    stylers: [{
                            hue: '#333333'
                        }, {
                            saturation: -100
                        }, ]
                }],
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: true,
            scaleControl: false,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

        // SET MARKET SCRIPT
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-marker.png'
        });
        marker.getPosition();

        //SET INFO WINDOW
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
    } catch (err) {

    }

    // RIGHT SIDE CUSTOMIZE SECTION SCRIPT
    // var menuLeft = document.getElementById('cbp-spmenu-s1'), body = document.body;
    // showLeft.onclick = function () {
    //     classie.toggle(this, 'active');
    //     classie.toggle(menuLeft, 'cbp-spmenu-open');
    //     disableOther('showLeft');
    // };
    // function disableOther(button) {
    //     if (button !== 'showLeft') {
    //         classie.toggle(showLeft, 'disabled');
    //     }
    // }
    // YOUTUBE VIDEO FULLSCREEN SCRIPT
    // Find all YouTube videos
    var $allVideos = jQuery("iframe[src^='https://www.youtube.com']");
    
    // The element that is fluid width
    var $fluidEl = jQuery(".vid-bx");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function () {
        jQuery(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
    });

    // When the window is resized
    // (You'll probably want to debounce this)
    jQuery(window).resize(function () {
        var newWidth = $fluidEl.width();
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function () {
            var $el = jQuery(this);
            $el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
        });
        // Kick off one resize to fix all videos on page load
    }).resize();

    try {
        // CONTACT ME FORM SCRIPT 
        
        var formvalidate = jQuery("#main-form");
        formvalidate.validate({
            rules: {
                name: {required: true},
                email: {required: true, email: true},
                subject: {required: true},
                message: {required: true}
            }
        });
        jQuery(formvalidate).submit(function (e) {			
            e.preventDefault();
            for(var i = 0; i < 4; i++){
                formvalidate[0][i].value = jQuery.trim(formvalidate[0][i].value);
            }
            //put the trim function before .valid. Trim whitespace then check for validity
            if (formvalidate.valid()) {
                if(navigator.onLine){
                    jQuery('#submit').text('SENDING...');

                    jQuery.ajax({type: 'post', url: "mail_handler.php", data: jQuery(formvalidate).serialize(), success: function (result) {
                            var $response = jQuery.parseJSON(result);
                            jQuery('#submit').text('contact me');
                            if ($response.success) {
                                jQuery('.error-msg').remove();
                                jQuery('.success-msg').remove();
                                jQuery('<p class="success-msg">' + $response.message + '</p>').insertAfter('#submit');
                                jQuery(formvalidate[0]).find("input[type=text], textarea, input[type=email]").val("");
                            } else {
                                jQuery('.error-msg').remove();
                                jQuery('.success-msg').remove();
                                jQuery('<p class="error-msg">' + $response.message + '</p>').insertAfter('#submit');
                            }
                        }});
                } else {
                    jQuery('<p class="error-msg">' + 'Error submitting form: You are offline.' + '</p>').insertAfter('#submit');
                }
            }
            return false;
        });
        
            

        // jQuery(formvalidate).submit(function (e) {			
        //     e.preventDefault();
        //     if (formvalidate.valid()) {
        //         jQuery('#submit').text('SENDING...');

        //         jQuery.ajax({type: 'post', url: "mail_handler.php", data: jQuery(formvalidate).serialize(), success: function (result) {
        //                 var $response = jQuery.parseJSON(result);
        //                 jQuery('#submit').text('contact me');
        //                 if ($response.success) {
        //                     jQuery('.error-msg').remove();
        //                     jQuery('.success-msg').remove();
        //                     jQuery('<p class="success-msg">' + $response.message + '</p>').insertAfter('#submit');
        //                     jQuery(formvalidate[0]).find("input[type=text], textarea, input[type=email]").val("");
        //                 } else {
        //                     jQuery('.error-msg').remove();
        //                     jQuery('.success-msg').remove();
        //                     jQuery('<p class="error-msg">' + $response.message + '</p>').insertAfter('#submit');
        //                 }
        //             }, timeout: 5000});
        //     }
        //     return false;
        // });
    } catch (err) {
        console.log('error', err);
    }
});
