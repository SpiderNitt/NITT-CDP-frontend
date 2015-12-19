cdpControllers.controller('homeController', [
	'$scope', '$http',
	function($scope, $http) {
		var message = "Hello World!";
		$scope.greeting = message;
		console.log(message);
	}
]);