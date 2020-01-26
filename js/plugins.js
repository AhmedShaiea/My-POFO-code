/*global $, document,  */

/* TIGI Hair Reborn */


// page go to top on reload
window.onbeforeunload = function () {
	'use strict';
	window.scrollTo(0, 0);
};

//******************** Start Loading screen **************************************
$(window).on('load', function () {
	'use strict';
	
	$('.loading .sk-cube-grid, .loading').fadeOut(1000, function () {
		// show the scroll
		$('body,html').css('overflow', 'auto');
		
		// remove loading div from Html
		$(this).remove();
		
		
	});
	
	
});

//******************** End Loading screen ******************************************




$(document).ready(function () {
	'use strict';
	
	$('.dropdown-toggle').on('click', function () {
		$('.dropdown-menu').slideToggle(500);
	});
	
	


	//***************** Start scroll to top button ******************************************
	var scrollButton = $('.scroll_top'),
		page = $('html');
	$(scrollButton).on('click', function () {
		$(page).animate({
			scrollTop: '0'
		}, 1500);
	});
	
	// Show & hide scroll button on scroll
	$(window).on('scroll', function () {
		
		if ($(this).scrollTop() > 500) {
			$(scrollButton).show();
			
		} else {
			$(scrollButton).fadeOut(500);
		}
	});
	//***************** End scroll to top button ******************************************
	
	
	//*********************Start smooth scroll on navbar click ****************************
    $('.navbar-collapse li').on('click', function (e) {
        
        e.preventDefault();
        
        $('html, body').animate({
            
            scrollTop: $($(this).data('name')).offset().top + 1
            
        }, 1000);
		
		// add active class to navbar on click
		
		$(this).addClass('active').siblings().removeClass('active');
		
    });
	//******************End smooth scroll on navbar click *******************************
	
	
	//********************Start add active class to navbar on scroll*********************
	
	$(window).scroll(function () {
		$('.scroll_active').each(function () {
			var cur_pos = $(window).scrollTop(),
				top = $(this).offset().top,
				button = top + $(this).innerHeight(),
				blockId = $(this).attr('id');
			if (cur_pos >= top  && cur_pos < button) {
				
				$('.navbar-collapse li').removeClass('active');
				
				$('.navbar-collapse li[data-name="#' + blockId + '"]').addClass('active');
		
			}

		});
	});
	
	//**************************End add active class to navbar on scroll********************
	
	
	
	

	//**************** Start owl carousel *********************
	$('.owl-carousel').owlCarousel({
		loop: true,
		stagePadding: 150,
		margin: 30,
		nav: false,
		dots: false,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				stagePadding: 80,
				items: 1
			},
			600: {
				items: 0
			},
			1000: {
				items: 3
			}
		}
	});
	//**************** End owl carousel *********************

	
	
	//********* Start showing choosing portfolio photos *********
	$('.choose li').each(function () {
		var x = $(this).data('photo'); //------------------------------ call choosing section custom attr
		$(this).on('click', function () {
			
			$('.templates a').hide(function () {
				$(this).removeAttr('style'); //------------------------ remove WOW.js effects from inline style
				$(this).attr('style', 'display: none'); //------------- add display none to inline style
				$(x).show(); //---------------------------------------- showing the choosing section photos
			});
			
		});
	});
	//********* Start showing choosing portfolio photos *********
	
	//********************Start add active class to navbar on scroll*********************
	
	$('.portoflio .choose li').on('click', function () {
		$('.portoflio .choose li').removeClass('active');
		$(this).addClass('active');
	});
	
	//**************************End add active class to navbar on scroll********************
	
	
});



