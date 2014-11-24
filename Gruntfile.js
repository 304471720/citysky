module.exports = function(grunt) {

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './public/js/lib',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', ['bower']);

};