/**
 * Core
 *
 * @package WP Singular
 * @subpackage JavaScript
 */

jQuery.noConflict();

jQuery(document).ready(function($){
	
	/*-----------------------------------------------------------------------------------*/
	/* Remove fade class for IE */
	/*-----------------------------------------------------------------------------------*/
	
	if ($.browser.msie) {
		$('.content-fade').removeClass('content-fade');
	}
	
	/*-----------------------------------------------------------------------------------*/
	/* Initialize FitVids */
	/*-----------------------------------------------------------------------------------*/
	
	$(".panel").fitVids();
	
	/*-----------------------------------------------------------------------------------*/
	/* Single page scrollto nav */
	/*-----------------------------------------------------------------------------------*/
	
	$('.menu').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* Isotope for portfolio filtering */
	/*-----------------------------------------------------------------------------------*/
	
	var $container = $('#isotope-container');
	$container.imagesLoaded( function(){
		$container.isotope();
	});
	$container.isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows',
		animationOptions: {
			duration: 400,
			easing: 'swing',
			queue: false
		}
	});
	// filter items when filter link is clicked
	$('#tags-nav a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* Apply Slabtext to H1 */
	/*-----------------------------------------------------------------------------------*/
	$("section#home h1").slabText();
	
	/*-----------------------------------------------------------------------------------*/
	/* Initialize PrettyPhoto */
	/*-----------------------------------------------------------------------------------*/
	
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	/*-----------------------------------------------------------------------------------*/
	/* Add last class to footer widgets */
	/*-----------------------------------------------------------------------------------*/
	
	$("footer .widget:nth-child(4n)").addClass("omega");
	
	/*-----------------------------------------------------------------------------------*/
	/* Add drop class to sub-menus */
	/*-----------------------------------------------------------------------------------*/
	
	$("ul.sub-menu").closest("li").addClass("drop");
	
	/*-----------------------------------------------------------------------------------*/
	/* Add drop class to sub-menus */
	/*-----------------------------------------------------------------------------------*/
	
	$("article.archive").hover(function () {
		$(this).addClass("hover")},
		function () {
		$(this).stop().removeClass("hover");
	});

	/*-----------------------------------------------------------------------------------*/
	/* Image overlay on hover */
	/*-----------------------------------------------------------------------------------*/
	
	$(".overlay").css("opacity","0");
	 
	$(".overlay").hover(function () {
		$(this).stop().animate({
		opacity: 0.9
		}, "fast");
		},
		function () {
		$(this).stop().animate({
		opacity: 0
		}, "fast");
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* Fade opacity on images when hovered */
	/*-----------------------------------------------------------------------------------*/
	
	$("#logo, #topbar img, #articles img, .featured-wrap img, #archive article.post img, .post-type-archive-portfolio section img, .post-social a, .single .lead-image, .widget img, #listing-tools a, #featured-listings a img, article a img").hover(function() {
		$(this).stop().animate({opacity: "0.7"}, 'slow');
	},
	function() {
		$(this).stop().animate({opacity: "1"}, 'slow');
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* Mobile Nav for Header */
	/*-----------------------------------------------------------------------------------*/
	
	// Create the dropdown base
	$("<select />").appendTo("header nav");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to..."
	}).appendTo("nav select");
	
	// Populate dropdown with menu items
	$("header nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
		 "value"   : el.attr("href"),
		 "text"    : el.text()
	 }).appendTo("nav select");
	});
	
	$("nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* Mobile Nav for Footer */
	/*-----------------------------------------------------------------------------------*/
	
	// Create the dropdown base
	$("<select />").appendTo("footer nav");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to..."
	}).appendTo("footer nav select");
	
	// Populate dropdown with menu items
	$("footer nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
		 "value"   : el.attr("href"),
		 "text"    : el.text()
	 }).appendTo("footer nav select");
	});
	
	$("footer nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
	
});

/*-----------------------------------------------------------------------------------*/
/* Social Popups */
/*-----------------------------------------------------------------------------------*/
	
function popup(pageURL,title,w,h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}