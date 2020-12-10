# Department Templates 

## Version 3.0 - December 10, 2020

Major overhaul of the template files with significant markup changes, new modules, and accessibility enhancements.  This is not an exhaustive list.

1. Global changes:
    * removed `html5shiv-printshiv.js` and `<div id=“ie”>` regions from all templates
    * page title is now an `<h1>`
    * the header order has shifted down one from v2.0.
        * e.g. an `<h3>` became an `<h2>`, an `<h4>` became an `<h3>`, etc.
    * changed all instances of `<div class="section">` to `<section>`
    * new popup info box drawer at bottom of page displays critical office info
        * can be added to every page type, but example is on `full-width-modules.html`
    * standard-page types can be displayed without left navigation and an increased content area (930px vs 836px) by using: `<body class="standard-page no-left-nav">`
2. Header
    * removed `<h1>` tag; now has an uppercase text-transform on `<div id="site-name">` with optional “normal-case” class for instances like "myHR"
    * removed global link dropdown option from `<div id="top-bar">`
    * changed the `<div>` to `<nav>` for `<div id="global-links">` and `<div id="quick-links:>`
3. Top Navigation
    * removed `<div class=“contain-1120”>` from inside `<nav id="top-nav">`
    * new dropdown options and stylings
        * added `aria-labeledby` to establish relationships between link and dropdown
        * added short description field option for links in 2 column, 2 column w/ quick links and 3 column dropdowns
        * `<ul class="dropdown-basic">` can now be used in combination with other  dropdowns variants
        * rightmost dropdown is automatically right-aligned (class no longer needed)
        * the first anchor in each dropdown should link to the section index page in a `<li class="overview">` with the word “Overview” appended to it
            * e.g. if the top navigation link is “About” then the first dropdown link would be `<li class="overview><a href="about.html">About Overview</a></li>`
4. Mobile Navigation
    * Entire line is now clickable to expand section (not just the + icon as was in v2.0)
        * If menu does not expand, then the clickable region should go directly to the page
    * Similar to the overview explanation above, the first link under each expanded menu should have an `<li class="overview">` with the word “Overview” appended to it
    * Recommend only showing three levels deep in mobile nav, but can go up to six
5. Footer
    * `<div class="footer-content contact">` region has more content flexiblity than before
    * “Northwestern Resources” must appear on all pages
    * added Spotify social icon
    * empty columns disappear
        * e.g. if no “Quick Links” or “Connect” regions, then "NorthwesternResources" automatically moves to the left
    * new optional CTA with button under unit’s social buttons
    * Northwestern top-level social buttons are in a new region next to the copyright
6. Full-width Modules Page
    * `<body class="landing-page">` changed to `<body class="full-width-page">`
    * Alert Box (new)
        * displays underneath top navigation to display mission critical alerts
        * option to display either exclamation point image or "we're N this together" image
    * Alternate Photo Float
        * changed markup for text-over-image
        * gradient is now automatically applied for text-over-image
    * Feature Boxes
        * no longer needs “no-button” class if there's no button
        * text and buttons are both optional
    * News, Event, Twitter Modules (new)
        * built from the ground up
        * 5 different layout options
            * thirds, two-thirds (wide first), two-thirds (wide last), halves, and full
        * events have two styles and can fit in any layout
            * event list with large date box; fields for time, building name, address, and description
                * on two-thirds and full layouts, option to display in two columns (see notes in html)
            * event list without large date box; fiends for date, time and description
        * news/feature has two options and can fit in any layout
        * Twitter feed has one option and can fit in all layouts except full
    * Photo Feature modules
        * gradients are now automatically applied
        * if there is no flip, then there should be fields for description and call to action.  if there is a flip, description and cta will be on the flip side and not the front
        * `<img>` has been moved outside `div.front` if there’s a flip
        * `div.back` text should be limited to 125 characters
    * Stats Callout
        * changed `<span>` to `<div>`
        * can now add multiple stats (removed single only version)
        * use class “twos” to group by twos only.
7. Standard Modules Page
    * New modules
        * Horizontal callout
        * Horizontal quote
        * Horizontal sidebar
    * Background Image Select
        * changed class from “select-date” to “subhead"  
    * Feature Boxes
        * no longer needs “no-button” class if there's no button
        * text and buttons are both optional
    * Feature and Events
        * updated markup
    * Photo Feature modules
        * gradients are now automatically applied
        * if there is no flip, then there should be fields for description and call to action.  if there is a flip, description and cta will be on the flip side and not the front
        * `<img>` has been moved outside `<div class="front">` if there’s a flip
        * `<div class="back">` text should be limited to 125 characters
    * Stats callout
        * changed `<span>` to `<div>`  
    * Twitter Feed
        *  renamed module class “twitter-feed” from “plus-section"  
    * Useful Links
        * changed class name from “showcase” to “useful-links"
        * changed `<p>` on links side to `<h3>`
        * stats option use new classes: “big” and “text"
        * updated Swiper to 5.0.2 (updated markup and the files: `swiper.min.css`, `swiper.min.js`, `content-slider.js`); new pagination feature
8. Standard No Left-Nav Modules Page 
    * same updates as Standard Modules Page above
    * changed `<body class="standard-page narrow-page">` to `<body class="standard-page no-left-nav">`
9. Standard Content Page
    * changed `<div id="sidebar">` to `<aside id=”sidebar”>`
    * left-nav section heading is now `<div class=“section-name">`
    * new `<hr>` styling
    * added new image caption styles for various image orientations
10. Datatables 
    * added basic datatable functionality using Datatables 1.10.22.
    * customize to your own needs
11. Event List Page
    * updated markup
12. Expand/Collapse Page
    * new show all/hide all toggle
13. News Story Page
    * changed `<div id="story-floater">` to `<aside id="story-floater">`
14. People Two Column List
    * new page type
15. Photo Grid (both full-width and standard)
    * added `aria-labeledby` attribute to the `<article>` to show relationship with `<h3>`
16. Tabs
    * new tabs module replaces v2.0 version. 
    * tabs turn into an accordion on mobile with a second set of controls