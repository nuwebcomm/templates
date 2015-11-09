$(document).ready(function () {

    // adds .responsive-table wrapper to table classes
    $("table").each(function () {
        $(this).wrap('<div class="responsive-table"></div>');
    });
    
    // zebra striping for tables
    $("table tr").mouseover(function () {
        $(this).addClass("hover");
    }).mouseout(function () {
        $(this).removeClass("hover");
    });
    $("table tr:odd").addClass("stripe");
    
    function switchTab(target) {
        $('#tab-content>div').hide();
        $('#tabs a').removeClass('active').attr('aria-selected', 'false');
        $(target.attr('href')).show();
        target.addClass('active').attr('aria-selected', 'true');
    }

    // tab clicks
    $('#tabs a[aria-controls]').click(function (e) {
    	switchTab($(this));
        e.preventDefault();
    });
    
    // select first tab when page loads
    if ($('#tabs a[aria-controls]').length) {
    	switchTab($('#tab1'));
    }

    // flip image on hover
    $('.photo-feature').hover(
        function () {
            flipCard($(this));
        },
        function () {
            unflipCard($(this));
        }
    );
    $('.photo-feature').click(function (e) {
        if ($(this).find('.front').is(":visible")) {
            flipCard($(this)); // hover was not triggered, so flip on click
            e.preventDefault();
        } // else goodbye!
    });
    function flipCard(cardObj) {
        var img_height = cardObj.find('img').css("height");
        $('.front').height(img_height);
        $('.back').height(img_height);
        cardObj.find('.front').hide();
        cardObj.find('.back').show();
    }
    function unflipCard(cardObj) {
        var img_height = cardObj.find('img').css("height");
        $('.front').height('auto');
        $('.back').height('auto');
        cardObj.find('.front').show();
        cardObj.find('.back').hide();
    }
	
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
    
    // expand/collapse for faq's
    $('.expander .plus, .expander .minus').click(function () {
        $(this).toggleClass('plus minus');
        $(this).next('div').toggleClass('showme hideme');
    });
    
    // expander matching hash
    $('.expander ' + location.hash).click();    

});

// accessible quick links dropdown in #top-bar #right
$(document).ready(function() {	
    $("#right").accessibleDropDown();
});
$.fn.accessibleDropDown = function ()
{
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
}