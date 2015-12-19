cdpApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'components/home/homeView.html',
			controller: 'homeController'
		})
	}
]);