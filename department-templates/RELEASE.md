# Department Templates 

## Version 1.5.5 - March 8, 2017

### HTML

* All HTML Pages:
  1. Moved body class js higher up to fix chrome "back to top" issue

* `landing-page.html`
  1. Added descriptions for modules
  2. Removed old version of `large-feature` 
  3. Removed `full-width-news`
  4. Revised `stats-callout` markup
  
* `narrow-page-modules.html`
  2. New page - standard modules page with no left navigation 
  
* `standard-page-modules.html`
  1. Renamed from `standard-page.html`
  2. Added descriptions for modules
  3. Revised `stats-callout` markup  
  
### SASS
* `/scss/styles.scss`
  1. New version number  

* `/scss/base/_typography.scss`
  1. Moved `ul.center-list` from `scss/page-types/landing-page/_main.scss`  

* `/scss/page-types/landing-page/_alternate-photo-float.scss`
  1. Centered content horizontally on mobile

* `scss/page-types/landing-page/_main.scss`
  1. Moved `ul.center-list` to `/scss/base/typography.scss`
  2. Added padding inside `section-top`

* `/scss/page-types/landing-page/_news-event.scss`
  1. Added "deprecated" comment to `full-width-news`

* `/scss/page-types/landing-page/_number-boxes.scss`
  1. Changed image name.

* `/scss/page-types/landing-page/_stats-callout.scss`
  1. Centered content horizontally; allows for odd number of callouts
  2. Changed `p` to `div` for single callout to match multiple callout version

* `/scss/page-types/standard-page/_alternate-photo-float.scss`
  1. Added missing `h3` in media query based on v1.5.4 addition
  2. Centered content horizontally on mobile

* `/scss/page-types/standard-page/_background-select.scss`
  1. updated margins for `p` and `.select-date`

* `scss/page-types/landing-page/_main.scss`
  1. Updated bottom margin for `<section>`tags

* `/scss/page-types/standard-page/_narrow-page.scss`
  1. Restrict width of `standard-page` modules on page

* `/scss/page-types/standard-page/_photo-feature-2-across.scss`
  1. removed auto margins  
  
* `/scss/page-types/standard-page/_stats-callout.scss`
  1. Changed `p` to `div` for single callout to match landing page
  
* `/scss/page-types/standard-page/_two-column-links.scss`
  1. removed bottom margin
  
* `/scss/sections/_responsive-tabs.scss`
  1. Restyled tabs
  2. Added classes for multiple tab module scenarios
  3. Added padding inside tab content
  
### JS
* `/scripts/scripts.js`
  1. Added logic to handle multiple tab modules 
  
### CSS
* `/css/styles.css`
  1. Compiled css (for dev use) 
  

## Version 1.5.4 - December 22, 2016

* `/RELEASE.md`
  1. Separated out release notes

### HTML
* All HTML Pages:
  1. Removed `<span class="hide-label">` from Northwestern logo
  2. Updated resources dropdown to use a class instead of relying on last-child
  3. Added fax option in footer

* `boilerplate.html`
  1. Example of `table.table-no-stripe` looks like

* `landing-page.html`
  1. Example of "News and Events" without photos

### SASS
* `/scss/styles.scss`
  1. New version number
  
* `/scss/base/_buttons.scss`
  1. New `normal-case` class can be appended to a button class
  
* `/scss/base/_core.scss`
  1. Misc. fixes.

* `/scss/base/_forms.scss`
  1. Wrong display type.
  
* `/scss/base/_ie.scss` 
  1. Added line breaks
  
* `/scss/base/_reset.scss`  
  1. Added line breaks
      
* `/scss/base/_typography.scss`
  1. Fixed broken `.table-no-hover`
  2. Added `.table-no-stripe` and `.table-center-header`
  3. Updated floating image media query
  
* `/scss/base/_variables.scss`
  1. Added `$nu-purple-70` variable
  
* `/scss/page-types/landing-page/_news-events.scss`
  1. Misc. fixes.
  
* `/scss/page-types/standard-page/_alternate-photo-float.scss`
  1. Added `h3` option depending on preceding header order

* `/scss/page-types/standard-page/_feature-boxes-2-columnns.scss`
  1. Added `h3` option depending on preceding header order

* `/scss/page-types/standard-page/_people-list.scss`  
  1. Misc. fixes.  

* `/scss/page-types/standard-page/_photo-feature-2-across.scss`
  1. Misc. fixes.  
  
* `/scss/page-types/standard-page/_showcase.scss`  
  1. Added `.below-content` clearfix  
  
* `/scss/page-types/standard-page/_two-column-links.scss`
  1. Added `h3` option depending on preceding header order
  
* `/scss/page-types/sections/_emergency.scss`
  1. Added `#breaking-news`
  
* `/scss/page-types/sections/_footer.scss`
  1. Increased font size for readability
  2. Adjusted `.footer-content` widths for better formatting
  3. New fax option
  
* `/scss/page-types/sections/_header.scss`
  1. Updated resources dropdown to use a class instead of relying on last-child

* `/scss/page-types/sections/_responsive-tabs.scss`
  1. Misc fixes

### JS
* `/scripts/scripts.js`
  1. Table stripe starts on first odd row in each table

### CSS
* `/css/styles.css`
  1. Compiled css (for dev use) 
  
* `/css/print.css`
  1. Added header font sizes
  2. Changed link color; added file name to `link:after`
  3. Updated footer

## Version 1.5.3 - August 18, 2016

### SASS
* `/scss/styles.scss`
  1. New version number
  
* `/scss/base/_forms.scss`
  1. Removed min-width; changed to percentage  

* `/scss/page-types/standard-page/_expand-collapse.scss`
  1. Override h3 font-size change at 480px

* `/scss/sections/_top-nav.scss`
  1. changed first level nav li to table cells for smoother handling of menu items

### CSS
* `/css/styles.css`
  1. Compiled css (for dev use) 

## Version 1.5.2 - July 5, 2016

### HTML
* `/index.html`
  1. Updated
  
* `/boilerplate.html`
  1. Updated left-nav treatment
  2. `ul.open` added to active child list only

### SASS
* `/scss/styles.scss`
  1. New version number

* `/scss/base/_typography.scss`
  1. Allow italic anchors in content region
  2. Added `.table-center-header` class for `<table>`

* `/scss/page-types/standard-page/_main.scss`
  1. Changed `.box` line-height
  2. Removed `<p>` margins
  3. Increased margin-top on all content `<h3>`, `<h4>`, `<h5>`, and `<h6`> if following `<p>`, `<ul>`, and `<ol>`

* `/scss/page-types/landing-page/_news-events.scss`
  1. Added 1.3em line-height to `<h4>` and `<h5>`
  2. Removed unnecessary styles

* `/scss/page-types/standard-page/_news-event.scss`
  1. Changed `h4` line-height to 1.3em
  2. Added bottom-margin to `.event`

* `/scss/sections/_footer.scss`
  1. Added background-size to `.contact` icons for MS Edge fix
  
* `/scss/sections/_left-nav.scss`
  1. Vertical grouping line only appears for open active folder by applying `ul.open`
  2. See `/boilerplate.html` for usage
 
* `/sections/_responsive-tabs.scss` 
  1. added clearfix to clear floats within tabs
  
* `/sections/_top-nav.scss` 
  1. Added underline text-decoration to first-level a:hover  

### CSS
* `/css/styles.css`
  1. Compiled css (expanded for dev use)
  

## Version 1.5.1 - May 10, 2016

### HTML
* `standard-page.html`
  1. Removed clearfix ("group") from **photo feature (2 across)**

### SASS

* `/scss/styles.scss`
  1. New version number

* `/scss/base/_reset.scss`
  1. Removed `<sup>` and `<sub>`

* `/scss/standard-page/_main.scss`
  1. Made `h2` and `h3` more specific to not conflict with hero font size

* `/scss/standard-page/_narrow-page.scss`
  1. Deleted media query at 500px that hides hero

* `/sections/_heroes.scss`
  1. Changed `<p>` font size at 480px

### CSS
* `/css/styles.css`
  1. Compiled css (expanded for dev use)

## Version 1.5 - April 22, 2016

In addition to the major items listed below, there may have been comments and code formatting updates to the files.

### HTML
* All html pages:
  1. Updated top-nav
  2. Added copyright year js in footer
  2. Added "We Will" icon in footer
  3. Removed unnecessary js/css links
  4. New `html5shiv-printshiv.js` - links to common.northwestern.edu
  6. Misc improvements and bug fixes

* `/index.html`
  1. Updated page type list

* `/boilerplate.html`
  1. Added `ul.steps` for large numbers
  2. Changed table hover state
  2. New `.table-no-hover` option for `<table>`   

* `/form.html`
  1. Fixed issue with checkboxes/radio buttons on forms

* `/expand-collapse.html`
  1. Updated to accessible expand/collapse with 3 variants

* `/landing-page.html`
  1. Added **feature boxes 4 columns**
  2. Added one callout option for **stats callout**
  3. Added **announcement** option under hero
  4. Added **photo feature (2 across)** and **photo feature (3 across)**  with and without hover
  5. Added new **large feature** option with `#right-side` div for additional content (previous version still supported)

* `/news-story-page.html`
  1. New

* `/photo-grid.html`
  1. New

* `/standard-page.html`
  1. Added **background select** option
  2. Added **photo feature (2 across)** with and without hover

* `/standard-photo-grid.html`
  1. New – may be used in responsive tabs (as shown)

### SASS

* `/scss/styles.scss`
  1. Added new modules

* `/scss/base/_buttons.scss`
  1. `<p class="button"><a href="#">Link</a></p>` now behaves like `<p><a href="#" class="button">Link</a></p>`

* `/scss/base/_forms.scss`
  1. Removed form specific variables
  2. Added smaller input field option

* `/scss/base/_variables.scss`
  1. Removed form specific variables

* `/scss/base/_typography.scss`
  1. Added media query for floating images
  2. Changed table hover state
  3. New `.table-no-hover` option for `<table>`
  4. Added line heights for header tags

* `/scss/page-types/landing-page/_announcement.scss`
  1. New announcement feature for home page under hero

* `/scss/page-types/landing-page/_feature_boxes-4-columns.scss`
  1. New
  
* `/scss/page-types/landing-page/_large-feature.scss`  
  1. Added new `#right-side` for additional content other than links (previous version still supported) 
 
* `/scss/page-types/landing-page/_photo-feature-2-across.scss`  
  1. Added missing flip option  
 
* `/scss/page-types/landing-page/_photo-grid.scss`  
  1. New

* `/scss/landing-page/_slider.scss`
  1. Changed slider controls behavior on mobile

* `/scss/landing-page/_stats-callout.scss`
  1. Added one callout option

* `/scss/standard-page/_background-select.scss`
  1. New

* `/scss/page-types/standard-page/_expand-collapse.scss` 
  1. Replaces old version
  2. Adds 3 variations

* `/scss/standard-page/_main.scss`
  1. Added `ul.steps` style

* `/scss/page-types/standard-page/_narrow-page.scss`
  1. Added news story page styles

* `/scss/page-types/standard-page/_news-event.scss`
  1. Removed grey triangle background image
  
* `/scss/page-types/standard-page/_photo.grid.scss`
  1. New - may also be used in responsive tabs (as shown)  

* `/scss/page-types/standard-page/_showcase.scss`
  1. Changed slider controls behavior on mobile

* `/scss/sections/_footer.scss`
  1. fixed long link text wrapping issue

* `/scss/sections/_top-nav.scss`
  1. Better spacing of links

### CSS
* `/css/print.css`
  1. Updated 

* `/css/styles.css`
  1. Compiled css (expanded for dev use)

### JS
* `/scripts/scripts.js`
  1. Removed old expander, added accessible minified jquery.expander to top
  2. **photo feature** no longer flips when there's no `.back`

## Version 1.0

Initial Commit
