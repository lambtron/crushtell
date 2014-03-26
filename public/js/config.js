sutterbus.config( ['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
  when('/', {
    templateUrl: 'public/views/pages/setup.html',
    controller: 'setupController'
  }).
  when('/crushes/:crushid', {
    templateUrl: 'public/views/pages/crushes.html',
    controller: 'crushesController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);