grunt-test
==========

# Testing grunt - very early stages

### What it currently does

* htmlhint - Lints HTML files to display errors/bad coding standards
* jshint - Lints JS files to display errors/bad coding standards (currently disabled)
* concat - Concatenate files. Currently set up to concatenate JS files into one file (production.js)
* uglify - File compression Currently set up to compress production.js
* compass - Compiles compass when any SCSS files are changed (same as compass watch, just faster). Also has dev and production settings.
* watch - Enables any of the above tasks to run when files are changed. Also has livereload so the browser will automatically refresh when a file is changed.


### Future plans

* Set up with a Magento project.
* Set up individual tasks, e.g dev/production/optimise
* Optimise and refactor, with the main goal is increasing the speed when the tasks are run.
* Fully set up a dev(src) and production(dist) environment.
* Optimise images/folder for file size
* Possibly implement QUnit - A JS unit testing framework
* Possibly implement clean - cleans files and folders
* Possibly implement cssmin - compresses CSS files
* Possibly implement selenium for testing
* Look at responsive-images
