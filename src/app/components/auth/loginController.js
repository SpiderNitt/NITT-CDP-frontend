cdpControllers.controller('loginController', [
	'$scope', 'Auth',
	function($scope, Auth) {
		$scope.login = function(user) {
			Auth.login(user)
			.then(
				function(response) {

				},
				function(response) {

				}
			);
		};
	}
]);