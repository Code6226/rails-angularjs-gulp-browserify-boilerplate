'use strict';

module.exports = {

  'browserPort'  : 3002,
  'UIPort'       : 3001,
  'serverPort'   : 3000,

  'styles': {
    'src' : 'client/styles/**/*.scss',
    'dest': 'public/assets/build/css'
  },

  'scripts': {
    'src' : 'client/js/**/*.js',
    'dest': 'public/assets/build/js'
  },

  'images': {
    'src' : 'client/images/**/*',
    'dest': 'public/assets/build/images'
  },

  'fonts': {
    'src' : ['client/fonts/**/*'],
    'dest': 'public/assets/build/fonts'
  },

  'views': {
    'watch': [
      'client/index.html',
      'client/views/**/*.html'
    ],
    'src': 'client/views/**/*.html',
    'dest': 'client/js'
  },

  'gzip': {
    'src': 'public/assets/build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'public/assets/build/',
    'options': {}
  },

  'dist': {
    'root'  : 'public/assets/build'
  },

  'browserify': {
    'entries'   : ['./client/js/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
