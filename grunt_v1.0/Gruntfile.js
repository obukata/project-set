module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  //gruntパッケージの読込
  for (taskName in pkg.devDependencies) {
    if (taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }


  grunt.initConfig({

    sass: {
      options: {
        style: 'expanded'
      },
      styles: {
        src: 'assets/sass/core.scss',
        dest: 'assets/styles/core.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      file: {
        expand: true,
        flatten: true,
        src: 'assets/styles/*.css',
        dest: 'assets/styles/'
      },
    },

    esteWatch: {
      options : {
        dirs : [
          'assets/sass/*',
          'assets/sass/',
          'assets/scripts/_scripts/*',
          'assets/scripts/_scripts/'
        ],
        livereload : {
          enabled : true,
          extensions : ['js', 'scss', 'css', 'html']
        }
      },

      js : function(src) {
        return ['babel']
      },

      scss : function(src) {
        if (src.match(/.scss$/) ) {
          src = '/**/*.scss';
        }
        return ['sass','autoprefixer'];
      }
    },

    connect : {
      dev : {
        options: {
          port     : 9000,
          hostname : '0.0.0.0',
          base     : '',
          open     : 'http://0.0.0.0:9000/'
        }
      }
    },

    babel: {
      option: {
        sourceMap: true,
        presets: ['@babel/preset-env', {
          'targets': {
            'browsers': ['last 2 versions', 'ie >= 11']
          }
        }]
      },
      dist: {
        files: {
          'assets/scripts/common.js': 'assets/scripts/_scripts/common.js'
        }
      }
    }


  });


  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'babel',
    'connect',
    'esteWatch'
  ]);
};