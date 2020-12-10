// jquery collapse - http://github.com/danielstocks/jQuery-Collapse/
!function(e,t){function n(t,n){n=n||{};var i=this,o=n.query||"> :even";e.extend(i,{$el:t,options:n,sections:[],isAccordion:n.accordion||!1,db:n.persist?jQueryCollapseStorage(t.get(0).id):!1}),i.states=i.db?i.db.read():[],i.$el.find(o).each(function(){new jQueryCollapseSection(e(this),i)}),function(t){i.$el.on("click","[data-collapse-summary] "+(t.options.clickQuery||""),e.proxy(i.handleClick,t)),i.$el.bind("toggle close open",e.proxy(i.handleEvent,t))}(i)}function i(t,n){n.options.clickQuery||t.wrapInner('<a href="#"/>'),e.extend(this,{isOpen:!1,$summary:t.attr("data-collapse-summary",""),$details:t.next(),options:n.options,parent:n}),n.sections.push(this);var i=n.states[this._index()];0===i?this.close(!0):this.$summary.is(".open")||1===i?this.open(!0):this.close(!0)}n.prototype={handleClick:function(t,n){t.preventDefault(),n=n||"toggle";for(var i=this.sections,o=i.length;o--;)if(e.contains(i[o].$summary[0],t.target)){i[o][n]();break}},handleEvent:function(e){return e.target==this.$el.get(0)?this[e.type]():void this.handleClick(e,e.type)},open:function(e){this._change("open",e)},close:function(e){this._change("close",e)},toggle:function(e){this._change("toggle",e)},_change:function(t,n){return isFinite(n)?this.sections[n][t]():void e.each(this.sections,function(e,n){n[t]()})}},i.prototype={toggle:function(){this.isOpen?this.close():this.open()},close:function(e){this._changeState("close",e)},open:function(t){var n=this;n.options.accordion&&!t&&e.each(n.parent.sections,function(e,t){t.close()}),n._changeState("open",t)},_index:function(){return e.inArray(this,this.parent.sections)},_changeState:function(t,n){var i=this;i.isOpen="open"==t,e.isFunction(i.options[t])&&!n?i.options[t].apply(i.$details):i.$details[i.isOpen?"show":"hide"](),i.$summary.toggleClass("open","close"!==t),i.$details.attr("aria-hidden","close"===t),i.$summary.attr("aria-expanded","open"===t),i.$summary.trigger("open"===t?"opened":"closed",i),i.parent.db&&i.parent.db.write(i._index(),i.isOpen)}},e.fn.extend({collapse:function(t,i){var o=i?e("body").find("[data-collapse]"):e(this);return o.each(function(){var o=i?{}:t,s=e(this).attr("data-collapse")||"";e.each(s.split(" "),function(e,t){t&&(o[t]=!0)}),new n(e(this),o)})}}),t.jQueryCollapse=n,t.jQueryCollapseSection=i,e(function(){e.fn.collapse(!1,!0)})}(window.jQuery,window);

// jquery.collapse_storage.js
!function(t){function a(t,a){this.id=t,this.db=a,this.data=[]}jQueryCollapseStorage=function(e){var i;try{i=window.localStorage||t.fn.collapse.cookieStorage}catch(t){i=!1}return!!i&&new a(e,i)},a.prototype={write:function(a,e){var i=this;i.data[a]=e?1:0,t.each(i.data,function(t){void 0===i.data[t]&&(i.data[t]=0)});var r=this._getDataObject();r[this.id]=this.data,this.db.setItem("jQuery-Collapse",JSON.stringify(r))},read:function(){return this._getDataObject()[this.id]||[]},_getDataObject:function(){var t=this.db.getItem("jQuery-Collapse");return t?JSON.parse(t):{}}}}(jQuery);

// skip to main content - https://gist.github.com/Zegnat/1900563
(function(a,b,c,d){for(c in a)(d=a[c].hash)&&a[c].href==b+d&&a[c].addEventListener&&a[c].addEventListener("click",function(a,b,c,d){if(a=(b=document).getElementById(c=this.hash.slice(1))||b.getElementsByName(c)[0])(d=!a.getAttribute(b="tabindex"))&&a.setAttribute(b,-1),a.focus(),d&&a.removeAttribute(b)})})(document.links,location.href.split("#")[0]);

$(document).ready(function () {

    // adds .responsive-table wrapper to tables
    $('table').each(function () {
        $(this).wrap('<div class="responsive-table"></div>');
    });
    
    // adds .responsive-container wrapper to iframes 
    // exclude ones with .not-responsive or .wufoo-form-container class or title="form"
    $('iframe:not(.not-responsive,.wufoo-form-container,[title="form"])').each(function () {
        if (!$(this).prev('script').length && !$(this).parents('div.lci_chat_load').length) {
            $(this).wrap('<div class="responsive-container"></div>');
        }
    });
    
    // zebra striping for tables
    $('table tr').mouseover(function () {
        $(this).addClass('hover');
    }).mouseout(function () {
        $(this).removeClass('hover');
    });
    $('tr:nth-child(odd)').addClass('stripe');
    
    // top navigation - if ul.basic-dropdown is used, add li.dropdown-relative parent class
    // this is to allow basic dropdowns to work alongside other dropdowns.
    $('.dropdown-basic').parent().addClass('dropdown-relative');
    
    // show/hide switch for expander
    $('#show-hide-switch').prop('checked', false);
    $('#show-hide-switch').change(function () {
        if ($('#show-hide-switch').is(":checked")) {
            $(".expander").trigger("open");
        } else {
            $(".expander").trigger("close");
        }
    });

    // photo feature flip image on hover
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
        cardObj.find('.front').height(img_height).hide();
        cardObj.find('.back').height(img_height).show();
    }
    function unflipCard(cardObj) {
        var img_height = cardObj.find('img').css("height");
        cardObj.find('.front').height('auto').show();
        cardObj.find('.back').height('auto').hide();
    }
	
    // remove border on image anchors
    $('a img').parent().css('border','none');

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
    
    // scroll to top arrow
    $('main').append('<a href="#top-bar" id="scrollup" aria-label="Return to the top of the page">Back to Top</a>');
    var amountScrolled = 200; // pixels scrolled before button appears
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a#scrollup').fadeIn('slow');
        } else {
            $('a#scrollup').fadeOut('slow');
        }
    });
    $('a#scrollup').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400); // speed
        return false;
    });    
    
    // remove broken breadcrumb links ending in index with no file extension
    $('#breadcrumbs li a[href$="index"]').each(function () {
        $(this).parent().remove();
    });
    
    // accessible #top-nav dropdown
    $("#top-nav").accessibleTopNavDropDown();

    // watch tab controls and update hash
    $( ".js-tabs-trigger, .js-accordeon-trigger" ).click(function() {
        var tabpanel = $(this).attr('aria-controls');
        window.location.hash = tabpanel;
    });

    // initialize accordion tabs and set selected if hash matches panel
    $(".js-tabs").each(function (index) {
        var targetTab = 0;
        
        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            $(this).find('.js-tabs-panel').each(function (i) {
                if ($(this).attr('id') == hash) {
                    targetTab = i;
                }
            });
        }
    
        new AccordionTabs(this, {
            breakpoint: 640,
            tabsAllowed: true,
            selectedTab: targetTab,
            startCollapsed: false
        });
    });
    
	// information popup box
	// minimize box on load
	$('.info-toggle').css('display','none');
	// toggle hide/show
	$(".info-box .header").click(function (e) {
		$('.info-toggle').slideToggle(function() {
			if ($(this).is(":visible")) {
				$(this).attr({'aria-hidden': 'false'});
			} else {
				$(this).attr({'aria-hidden': 'true'});
			}
		});
		e.preventDefault();
	});

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