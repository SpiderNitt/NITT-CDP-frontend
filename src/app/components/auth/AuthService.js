cdpServices.factory('Auth', [
	'$http',
	function($http) {
		var AuthInstance = {};

		AuthInstance.login = function(user) {
			return $http.post('/api/login', user);
		};

		return AuthInstance;
	}
]);