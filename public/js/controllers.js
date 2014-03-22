'use strict';

crushtell.controller('mainController',
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


}]);