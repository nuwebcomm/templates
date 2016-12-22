# Header/Footer Template

## Version 1.5.4 - December 22, 2016

* `/RELEASE.md`
  1. Separated out release notes

### HTML

* `index.html`
  1. Removed `<span class="hide-label">` from Northwestern logo
  2. Updated resources dropdown to use a class instead of relying on last-child
  3. Added fax option in footer  
  
### SASS

* `/scss/styles.scss`
  1. New version number

* `/scss/base/_buttons.scss`
  1. New `normal-case` class can be appended to a button class
  
* `/scss/base/_reset.scss`
  1. Removed unused breadcrumbs and left nav
  
* `/scss/base/_variables.scss`
  1. Added `$nu-purple-70` variable
  
* `/scss/page-types/sections/_footer.scss`
  1. Increased font size for readability
  2. Adjusted `.footer-content` widths for better formatting
  3. New fax option
  
* `/scss/page-types/sections/_header.scss`
  1. Updated resources dropdown to use a class instead of relying on last-child    

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
  
* `/scss/sections/_top-nav.scss`
  1. changed first level nav li to table cells for smoother handling of menu items  

### CSS
* `/css/styles.css`
  1. Compiled css (for dev use)  
  
* `/css/print.css`
  1. Added header font sizes
  2. Changed link color; added file name to `link:after`
  3. Updated footer  

## Version 1.5.2 - July 5, 2016

### SASS
* `/scss/styles.scss`
  1. New version number

* `/scss/sections/_footer.scss`
  1. Added background-size to `.contact` icons for MS Edge fix.
  
* `/sections/_top-nav.scss` 
  1. Added underline text-decoration to first-level a:hover   
  
* `/scss/base/_typography.scss`
  1. Allow italic anchors in content region  
  
### CSS
* `/css/styles.css`
  1. Compiled css (expanded for dev use)  

## Version 1.5.1 - May 10, 2016

### SASS
* `/scss/styles.scss`
  1. New version number

* `/scss/base/_reset.scss`
  1. Removed `<sup>` and `<sub>`
  
### CSS
* `/css/styles.css`
  1. Compiled css (expanded for dev use)  

## Version 1.5 - April 22, 2016

In addition to the major items listed below, there may have been comments and code formatting updates to the files.

### HTML
* `/index.html`
  1. Added copyright year js in footer
  2. Added "We Will" icon in footer
  3. New `html5shiv-printshiv.js` - links to common.northwestern.edu
  5. Updated top-nav
  
### SASS
* `/scss/base/_typography.scss`
  1. Added line heights for header tags  
 
* `/scss/sections/_footer.scss`
  1. Added "We Will" icon 

* `/scss/sections/_mobile-nav.scss`
  1. Added `#mobile-nav-bottom-right` style
 
### CSS
* `/css/print.css`
  1. New  

* `/css/styles.css`
  1. Compiled css (expanded for dev use)
  
## Version 1.0
  
Initial Commit