(function(){
  var app = angular.module('agaleaPanel', [
		'ngRoute',
    'ngclipboard',
    'ngSanitize',
    'ui.tinymce',
		'agaleaPanel.controllers',
		'agaleaPanel.services',
		'therappyPanel.directives'
	]);
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/amenidad', {
        templateUrl: './../views/home-slider.html',
        controller: 'menuNavController'
      })
      .when('/amenidad/:id', {
        templateUrl: './../views/amenidad.html',
        controller: 'menuNavController'
      })      
      .when('/habitaciones', {
        templateUrl: './../views/products.html',
        controller: 'menuNavController'
      })
      .when('/habitaciones/:id', {
        templateUrl: './../views/product.html',
        controller: 'menuNavController'
      })
      .when('/espacios', {
        templateUrl: './../views/blog-tips.html',
        controller: 'menuNavController'
      })
       .when('/espacios/:id', {
        templateUrl: './../views/espacios.html',
        controller: 'menuNavController'
      })     
      .when('/slider', {
        templateUrl: './../views/slider.html',
        controller: 'menuNavController'
      })          
      .otherwise({
				redirectTo: '/redirect'
			});
  }]);
})();
