# Header/Footer Template

## Version 3.0 - December 10, 2020

Significant overhaul of the template file.

1. Global changes:
    * removed `html5shiv-printshiv.js` and `<div id=“ie”>` regions
2. Header
    * removed `<h1>` tag; now has an uppercase text-transform on `<div id="site-name">` with optional “normal-case” class for instances like "myHR"
    * removed global link dropdown option from `<div id="top-bar">`
    * changed the `<div>` to `<nav>` for `<div id="global-links">` and `<div id="quick-links:>`
3. Top Navigation
    * removed `<div class=“contain-1120”>` from inside `<nav id="top-nav">`
    * new dropdown options and stylings
        * added `aria-labeledby` to establish relationships between link and dropdown
        * added short description field option for links in 2 column, 2 column w/ quick links and 3 column dropdowns
        * `<ul class="dropdown-basic">` can now be used in combination with other dropdowns variants
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