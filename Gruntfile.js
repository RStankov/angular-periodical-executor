module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      build: {
        singleRun: true,
        autoWatch: false
      },
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma:build']);
};

