module.exports = function(grunt) {

  // Configuration goes here

grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),



    htmlhint: {
        build: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'head-script-disabled': true,
                'style-disabled': true
            },
            src: ['index.html']
        }
    },


    jshint: {
        // define the files to lint
        files: ['gruntfile.js', 'js/*.js', 'js/build/*.js'],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
            // more options here if you want to override JSHint defaults
            globals: {
                jQuery: true,
                console: true,
                module: true
            }
        }
    },


    concat: {
      options: {
          // define a string to put between each file in the concatenated output
            separator: ';'
        },
        dist: {
            // the files to concatenate
            src: ['js/*.js'],
            // the location of the resulting JS file
            dest: 'js/build/production.js'
        }
    },


    uglify: {
        options: {
            // the banner is inserted at the top of the output
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
            files: {
                'js/build/production.js': ['<%= concat.dist.dest %>']
            }
        }
    },


    compass: {                  // Task
        dist: {                   // Target
            options: {              // Target options
                sassDir: 'sass',
                cssDir: 'css',
                environment: 'production'
            }
        },
        dev: {                    // Another target
            options: {
                sassDir: 'sass',
                cssDir: 'css',
                sourcemap: true,
                debugInfo: true,
                watch: false
            }
        }
    },


    watch: {
        html: {
            files: ['*.html'],
            tasks: ['htmlhint']
        },
        js: {
            files: ['js/*'],
            tasks: ['jshint']
        },
        sass: {
            files: ['sass/*.scss'],
            tasks: ['compass']
        },
        options: {
            livereload: 35729
        }
    }

});

    require('load-grunt-tasks')(grunt), // Loads all defined grunt tasks


  // Define your tasks here

  grunt.registerTask('default', ['htmlhint', 'concat', 'uglify', 'compass', /*'jshint', */'watch']);

};
