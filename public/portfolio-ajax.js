/**
 * Portfolio Ajax
 *
 * @package WP Consultant
 * @subpackage JavaScript
 */

jQuery(function($){
	$(document).ready(function(){
		
		/** disable AJAX caching */
		$.ajaxSetup ({
			cache: false  
		});

		/** define global vars */
		var link, currPort, prevPort, nextPort;

		/** load portfolio based on clicked anchor links */
		function load_portfolio_ajax(link) {
			
			var ajax_container = $('#portfolio-inner');

			// scroll to portfolio item
			$('html,body').animate({ scrollTop: $('#portfolio-inner').offset().top - 160 }, 1000);
			$('#ct-loader').fadeIn();

			// load portfolio via ajax
			ajax_container.slideUp(500, function() {
				
				ajax_container.load( link + ' #portfolio-inner', function() {
					
					// update next/prev data, show/hide
					if(prevPort.find('a.ajax-anchor').attr('href') == undefined) $('#portfolio-inner ul.prev-next a.prev').hide();
					if(nextPort.find('a.ajax-anchor').attr('href') == undefined) $('#portfolio-inner ul.prev-next a.next').hide();

					$('#ct-loader').fadeOut();
					
					// slidedown to show new item
					ajax_container.slideDown();

					// fire up scripts on newly loaded item
					after_portfolio_ajax();

				});
				
			});
			
		}

		// fire up scripts on loaded item
		function after_portfolio_ajax() {
			// initialise e.g. flexslider etc here

		}
		
		/** bind portfolio items anchors */
		$(document).on('click', '.portfolio-wrap a.ajax-anchor', function() {
			// get current portfolio link
			link = $(this).attr('href');

			// prevent ajax firing on the same item
			if($(this).hasClass('current')) return false;
			$('.portfolio-wrap a.ajax-anchor').removeClass('current');
			$(this).addClass('current');

			// update curr/prev/next portfolio links
			currPort = $(this).parent().parent().parent();
			prevPort = currPort.prev();
			nextPort = currPort.next();

			load_portfolio_ajax(link);
			return false;
		});

		/** bind next/prev anchors */
		$(document).on('click', '#portfolio-inner ul.prev-next a', function() {
			
			if($(this).hasClass('prev')) {
				link = prevPort.find('a.ajax-anchor').attr('href');
				load_portfolio_ajax(link);

				// update prev/next portfolio object
				prevPort = prevPort == undefined ? null : prevPort.prev();
				nextPort = currPort;
				currPort = prevPort == undefined ? null : prevPort;

			} else
			if($(this).hasClass('next')) {
				link = nextPort.find('a.ajax-anchor').attr('href');
				load_portfolio_ajax(link);

				// update prev/next portfolio object
				prevPort = currPort;
				nextPort = nextPort == undefined ? null : nextPort.next();
				currPort = nextPort == undefined ? null : nextPort;
			}

			return false;
		});

		/** close portfolio preview */
		$(document).on('click', '#portfolio-inner ul.prev-next a.close', function() {
			$('#portfolio-inner').slideUp();
		});
		
				
	}); // END $(document).ready()
}); // END jQuery()
