module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      default: {
        options: {
          compress: false,
          sourceMap: true,
          sourceMapFilename: 'dist/bootstrap-grid.css.map'
        },
        files: {
          'dist/bootstrap-grid.css': 'bootstrap-grid.less'
        }
      },
      minified: {
        options: {
          compress: true,
          sourceMap: true,
          sourceMapFilename: 'dist/bootstrap-grid.min.css.map'
        },
        files: {
          'dist/bootstrap-grid.min.css': 'bootstrap-grid.less'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('build', [
                       'less:default',
                       'less:minified',
                     ]);

    // Default task
    grunt.registerTask('default', 'build');

};
