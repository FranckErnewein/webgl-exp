module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    browserify: {
      options: {
        transform: ['browserify-shader'],
        watch: true,
        browserifyOptions: {
          debug: true,
        }
      },
      main: {
        dest: 'public/js/main.js',
        src: 'src/main.js',
      }
    },
    watch: {
    }
  });

  grunt.registerTask('default', ['browserify', 'watch']);
};
