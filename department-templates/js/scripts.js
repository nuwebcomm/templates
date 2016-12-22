// faq expand/collapse
!function(e,t){function n(t,n){n=n||{};var i=this,o=n.query||"> :even";e.extend(i,{$el:t,options:n,sections:[],isAccordion:n.accordion||!1,db:n.persist?jQueryCollapseStorage(t.get(0).id):!1}),i.states=i.db?i.db.read():[],i.$el.find(o).each(function(){new jQueryCollapseSection(e(this),i)}),function(t){i.$el.on("click","[data-collapse-summary] "+(t.options.clickQuery||""),e.proxy(i.handleClick,t)),i.$el.bind("toggle close open",e.proxy(i.handleEvent,t))}(i)}function i(t,n){n.options.clickQuery||t.wrapInner('<a href="#"/>'),e.extend(this,{isOpen:!1,$summary:t.attr("data-collapse-summary",""),$details:t.next(),options:n.options,parent:n}),n.sections.push(this);var i=n.states[this._index()];0===i?this.close(!0):this.$summary.is(".open")||1===i?this.open(!0):this.close(!0)}n.prototype={handleClick:function(t,n){t.preventDefault(),n=n||"toggle";for(var i=this.sections,o=i.length;o--;)if(e.contains(i[o].$summary[0],t.target)){i[o][n]();break}},handleEvent:function(e){return e.target==this.$el.get(0)?this[e.type]():void this.handleClick(e,e.type)},open:function(e){this._change("open",e)},close:function(e){this._change("close",e)},toggle:function(e){this._change("toggle",e)},_change:function(t,n){return isFinite(n)?this.sections[n][t]():void e.each(this.sections,function(e,n){n[t]()})}},i.prototype={toggle:function(){this.isOpen?this.close():this.open()},close:function(e){this._changeState("close",e)},open:function(t){var n=this;n.options.accordion&&!t&&e.each(n.parent.sections,function(e,t){t.close()}),n._changeState("open",t)},_index:function(){return e.inArray(this,this.parent.sections)},_changeState:function(t,n){var i=this;i.isOpen="open"==t,e.isFunction(i.options[t])&&!n?i.options[t].apply(i.$details):i.$details[i.isOpen?"show":"hide"](),i.$summary.toggleClass("open","close"!==t),i.$details.attr("aria-hidden","close"===t),i.$summary.attr("aria-expanded","open"===t),i.$summary.trigger("open"===t?"opened":"closed",i),i.parent.db&&i.parent.db.write(i._index(),i.isOpen)}},e.fn.extend({collapse:function(t,i){var o=i?e("body").find("[data-collapse]"):e(this);return o.each(function(){var o=i?{}:t,s=e(this).attr("data-collapse")||"";e.each(s.split(" "),function(e,t){t&&(o[t]=!0)}),new n(e(this),o)})}}),t.jQueryCollapse=n,t.jQueryCollapseSection=i,e(function(){e.fn.collapse(!1,!0)})}(window.jQuery,window);

$(document).ready(function () {

    // adds .responsive-table wrapper to table classes
    $('table').each(function () {
        $(this).wrap('<div class="responsive-table"></div>');
    });
    
    // zebra striping for tables
    $('table tr').mouseover(function () {
        $(this).addClass('hover');
    }).mouseout(function () {
        $(this).removeClass('hover');
    });
    $('tr:nth-child(odd)').addClass('stripe');
    
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
    $('.photo-feature').has('.back').hover(
        function () {
            flipCard($(this));
        },
        function () {
            unflipCard($(this));
        }
    );
    $('.photo-feature').has('.back').click(function (e) {
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