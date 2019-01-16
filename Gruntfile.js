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
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  //Do the tast
  grunt.registerTask('default', ['cssmin'])
};