'use strict';

crushtell.controller('setupController',
  ['$scope', '$http',
	function ($scope, $http)
{
	// Setting up variables needed for alerts and notification system.
	var user = $scope.user = {
		name: '',
		email: '',
		type: [],											// w4m, m4m
		keywords: [],
		location: [],
		neighborhoods: [],
		submit: function submit() {
			$http.post('/setup', user)
			.success(function (data) {
				console.log(data);
			})
			.error(function (data) {
				console.log('Error: ');
				console.log(data);
			});
		}
	};

	// Obj
  // .keywords: [w4m, m4w, white, beard, bearded, coffee, ..]
  // .neighborhoods: [48, 112, ..]
  // .maxAge: 35
  // .minAge: 20
	var obj = {
		keywords: ['w4m'],
		neighborhoods: [48],
		maxAge: 35,
		minAge: 28
	};

	$http.post('/getlistings', obj)
	.success(function (data) {
		console.log(data);
	})
	.error(function (data) {
		console.log('Error:');
		console.log(data);
	});

}]);

crushtell.controller('crushesController',
  ['$scope', '$http',
	function ($scope, $http)
{
  // Initialize variables needed.
  var crushes = $scope.crushes = [];

  // Post PsetID. If exists, then set data. Otherwise, redirect to root.
  $http.post('/getlistings', {crushId: $routeParams.crushId} )
  .success(function (data) {
    crushes = data;
  })
  .error(function (data) {
    $location.path('/');
    console.log('Server error: ' + data);
  });
}]);