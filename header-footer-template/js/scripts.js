// scripts.js

$(document).ready(function () {
    
    // top navigation - if ul.basic-dropdown is used, add li.dropdown-relative parent class
    // this is to allow basic dropdowns to work alongside other dropdowns.
    $('.dropdown-basic').parent().addClass('dropdown-relative');

    // expandable mobile elements
	var _time = 100; // transition time

	// open search
	$(".mobile-search-link").click(function (e) {
		// close menu
		$("#mobile-nav").slideUp(_time).attr({
			'aria-expanded': 'false',
			'aria-hidden': 'true'
		});
		$(".mobile-nav-link").removeClass('open').children(":first").html('Open menu');
		var el = $("#mobile-search");
		// open search
		if ($(el).is(":hidden")) {
			$(el).slideDown(_time).attr({
				'aria-expanded': 'true',
				'aria-hidden': 'false'
			});
			$(".mobile-search-link").addClass('open').children(":first").attr({'aria-label': 'close search'});
            $("#q-mobile").focus();
            
		// close search
		} else {
			$(el).slideUp(_time).attr({
				'aria-expanded': 'false',
				'aria-hidden': 'true'
			});
			$(".mobile-search-link").removeClass('open').children(":first").attr({'aria-label': 'open search'});
		}
		e.preventDefault();
	});
    
    // mobile nav hidden
    $('#mobile-nav').attr({
		'aria-expanded': 'false',
		'aria-hidden': 'true'
	});
    
	// open menu
	$(".mobile-nav-link").click(function (e) {
        e.preventDefault();
        
		// close search
		$("#mobile-search").slideUp(_time).attr({
			'aria-expanded': 'false',
			'aria-hidden': 'true'
		});
		$(".mobile-search-link").removeClass('open').children(":first").attr({'aria-label': 'open search'});
		var el = $("#mobile-nav");
		// open menu
		if ($(el).is(":hidden")) {
    		$(el).slideDown(_time, function() {
				$('#mobile-nav').children('ul:first-child').children('li:first-child').children('a:first-child').focus();
			});
			$(el).attr({
				'aria-expanded': 'true',
				'aria-hidden': 'false'
			});
			$(".mobile-nav-link").addClass('open').children(":first").html('Close Menu');
		// close menu
		} else {
			$(el).slideUp(_time).attr({
				'aria-expanded': 'false',
				'aria-hidden': 'true'
			});
			$(".mobile-nav-link").removeClass('open').children(":first").html('Open menu');
		}
	});
    
	// close mobile search, nav on window resize
	$(window).on('resize', function () {
		if ($('#mobile-links').is(":hidden")) {
			$("#mobile-search").hide();
			$("#mobile-nav").hide();
			$('.mobile-search-link').removeClass('open');
			$('.mobile-nav-link').removeClass('open');
		}
	});
    
    // mobile drill down navigation
    $('#mobile-nav a[href="#"]').click(function(e) {
        e.preventDefault();
		var clicked = $(this);
		// hide all non-parent unordered lists
		var parents = $(clicked).parentsUntil('#mobile-nav', 'ul');
		var lists = $('#mobile-nav a[href="#"]').next('ul').not(parents);
		
		$.each(lists,(function(index, obj) {
            $(obj).parent('li').find('span').removeClass('open');
            $(obj).parent('li').find('a').removeClass('expand');
            $(obj).attr({
    			'aria-hidden': 'true',
           	    'aria-expanded': 'false'
			});
			$(obj).slideUp('fast');
		}));
		// open the clicked item
		var item = clicked.next('ul');
		if (item.is(':hidden')) {
			item.slideDown('fast', function() {
				item.children('li:first-child').children('a').focus();
			});
            item.attr({
    			'aria-hidden': 'false',
           	    'aria-expanded': 'true'
			});
			// clicked.addClass('open');
			clicked.addClass('expand');
			clicked.children('span').addClass('open');
//			clicked.find('span').html('Collapse');
           
		} else {
			item.slideUp('fast', function() {
				clicked.closest('li').children(':first-child').focus();
			});
            item.attr({
    			'aria-hidden': 'true',
           	    'aria-expanded': 'false'
			});
			clicked.removeClass('expand');
			clicked.children('span').removeClass('open');
//			clicked.find('span').html('Expand');
		}
	});	      
    
    // accessible #top-nav dropdown
    $("#top-nav").accessibleTopNavDropDown();

}); // end ready event

// accessible #top-nav dropdown
$.fn.accessibleTopNavDropDown = function ()
{
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
}