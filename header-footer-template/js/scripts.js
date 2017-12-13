$(document).ready(function () {

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
    $('.arrow a').click(function(e) {
        e.preventDefault();
		var clicked = $(this);
		// hide all
		var parents = $(clicked).parentsUntil('#mobile-nav', 'ul');
		var lists = $('.arrow a').parent().next('ul').not(parents);
		
		$.each(lists,(function(index, obj) {
            $(obj).parent().find('.open').removeClass('open');
			$(obj).slideUp('fast');
		}));
		// open the clicked item
		var item = clicked.parent().next('ul');
		if (item.is(':hidden')) {
			item.slideDown('fast', function() {
				item.children('li:first-child').children('a').focus();
			});
            item.attr({
    			'aria-hidden': 'false',
           	    'aria-expanded': 'true'
			});
			clicked.parent().addClass('open');
			clicked.find('span').html('Collapse');
           
		} else {
			item.slideUp('fast', function() {
				clicked.closest('li').children(':first-child').focus();
			});
            item.attr({
    			'aria-hidden': 'true',
           	    'aria-expanded': 'false'
			});
			clicked.parent().removeClass('open');
			clicked.find('span').html('Expand');
		}
	});
    
    // accessible #top-nav dropdown
    $("#top-nav").accessibleTopNavDropDown();
    
    // accessible #global-links dropdown
    $("#global-links").accessibleGlobalLinksDropDown();

});

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

// accessible #global-links dropdown
$.fn.accessibleGlobalLinksDropDown = function ()
{
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
}