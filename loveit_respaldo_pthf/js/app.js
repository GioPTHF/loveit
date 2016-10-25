(function(){
	var app = angular.module('loveitSite', [
		'ngRoute',
		'loveitSite.controllers',
		'loveitSite.directives'
	]);
	app.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider){
		$routeProvider
			.when('/home', {
				templateUrl: './views/home.html'
			})
			.when('/nosotros', {
				templateUrl: './views/nosotros.html'
			})
			.when('/amenidades', {
				templateUrl: './views/amenidades.html'
			})
			.when('/servicios', {
				templateUrl: './views/servicios.html'
			})
			.when('/servicios-premium', {
				templateUrl: './views/servicios-premium.html'
			})
			.when('/espacios', {
				templateUrl: './views/espacios.html'
			})
			.when('/habitaciones', {
				templateUrl: './views/habitaciones.html'
			})
			.when('/restaurante', {
				templateUrl: './views/restaurante.html'
			})
			.otherwise({
				redirectTo: '/home'
			});
			// $locationProvider.html5Mode(true);
	}]);
})();
