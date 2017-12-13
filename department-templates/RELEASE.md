# Department Templates 

## Version 2.0 - December 13, 2017

Major overhaul of the template files including numerous accessibility enhancements.  This is not an exhaustive list.

1. `<header></header>` markup on all pages has changed
   * Added alternate parent unit header option with "N" wordmark. See `parent-header.html` 
   * New SearchBlox form added
   * Changed `#right` to `#global-links` (for links to external sites)
   * Added `#quick-links` in `#top-bar` (for quick links to internal pages)
   * Moved `#mobile-links`(mobile navigation and search) out of `#top-bar` for new mobile button placement
1. All `<section></section>` tags have been replaced with `<div class="section"></div>`
1. Changed tabindex to -1 on `<main>`
1. Added 4th top navigation dropdown option with space for descriptive text and a quick links region.  See `full-width-nav.html`
1. Removed all "Back to top" links above `</main>` on all pages; Replaced with "scroll to top" function in `scripts.js`
1. Moved `<div id="sidebar"></div>` below `<h2>` page header on content pages.  See `boilerplate.html`
1. Added DataTables option. See `datatables.html`
1. News/events modules
   * Added "Feature and Events" and "Events Between Two Features" on `landing-news-event-modules.html`
   * Added "Feature and Events" and "Feature and WYSIWYG" on `standard-page-modules.html`
   * `<h4>` tags are now anchors instead of utilizing buttons below content for "more news" or "more events"
1. Removed all "Read More" links from `photo-grid.html` and `standard-photo-grid.html`   
1. iFrames (e.g. for videos) are now automatically wrapped in a `<div class="responsive-container"></div>`
1. `#top-nav` and `#global-links` dropdowns are now visually accessible by tabbing
1. Removed "photo-hover" class from anchor on all photo features without the flip on both landing and standard page modules; now applied with CSS