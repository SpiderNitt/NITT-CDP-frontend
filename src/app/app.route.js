cdpApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'components/home/homeView.html',
			controller: 'homeController'
		})
		.when('/login', {
			templateUrl: 'components/auth/loginView.html',
			controller: 'loginController'
		});
	}
]);