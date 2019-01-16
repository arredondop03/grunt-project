module.exports = function(grunt){
  grunt.initConfig({
    //Basic settings and info about our plugins
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'styles-min.css': ['styles.css']
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'app-min.js': ['app.js']
        }
      }
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')


  //Do the tast
  grunt.registerTask('default', ['cssmin', 'uglify'])
};