'use strict';

let angular = require('angular');
let bulk = require('bulk-require');

import onConfig from './on_config';
import onRun from './on_run';
import constants from './constants';

// angular modules
import 'angular-ui-router';
import './templates';

angular.module('app.controllers', []);
bulk(__dirname, [ './controllers/**/!(*.spec).js' ]);

angular.module('app.services', []);
bulk(__dirname, [ './services/**/!(*.spec).js' ]);

angular.module('app.directives', []);
bulk(__dirname, [ './directives/**/!(*.spec).js' ]);

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', constants);
  angular.module('app').config(onConfig);
  angular.module('app').run(onRun);

  angular.bootstrap(document, ['app']);

});