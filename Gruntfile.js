module.exports = function(grunt) {

  grunt.initConfig({

    /* Generate responsive images (from high-quality source) */
    responsive_images: {
      biopic: {
        options: {
          engine: 'im',
          newFilesOnly: false,
          sizes: [{
            width: '100%',
            rename: false,
            suffix: '@2x',
            quality: 70
          },
          {
            width: '50%',
            rename: false,
            suffix: '@1x',
            quality: 80,
            sharpen: {
              sigma: .75,
              radius: 2
            }
          }]
        },

        files: [{
          expand: true,
          cwd: 'src/images_src/',
          src: ['kevin-frutiger.jpg'],
          dest: 'src/images/'
        }]
      },
      thumbnails: {
        options: {
          engine: 'im',
          newFilesOnly: false,
          sizes: [{
            width: '100%',
            rename: false,
            suffix: '@2x',
          },
          {
            width: '50%',
            rename: false,
            suffix: '@1x',
            sharpen: {
              sigma: 1,
              radius: 2
            }
          }]
        },

        files: [{
          expand: true,
          cwd: 'src/images_src/',
          src: ['*.png'],
          dest: 'src/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      generateImages: {
        src: ['src/images']
      },
      build: {
        src: ['dist/*']
      }
    },

    /* Generate the images directory, in case it's missing */
    mkdir: {
      generateImages: {
        options: {
          create: ['src/images']
        }
      }
    },

    /* Copy the "fixed" images that don't require responsive versions */
    copy: {
      generateImages: {
        files: [{
          expand: true,
          cwd: 'src/images_src/fixed',
          src: ['*'],
          dest: 'src/images/'
        }]
      }
    },

    /* Build */
    htmlmin: {
      main: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.html'],
          dest:  'dist/'
        }]
      }
    },

    cssmin: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['*.css'],
          dest: 'dist/css/'
        }]
      }
    },

    uglify: {
      options: {
        mangle: false,
        wrap: false,
        compress: {
          negate_iife: false,
          drop_console: true
        }
      },

      main: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: ['**/*.js'],
          dest: 'dist/js/'
        }]
      }
    },

    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/images/'
        }]
      }
    },

    /* Testing */
    jshint: {
      main: ['src/js/resumeBuilder.js']
    }
  });

  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('generate-images', ['clean:generateImages', 'mkdir:generateImages', 'responsive_images', 'copy:generateImages']);
  grunt.registerTask('build', ['clean:build', 'htmlmin', 'cssmin', 'uglify', 'imagemin']);

};
