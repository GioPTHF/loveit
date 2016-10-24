(function(){
  angular.module('loveitSite.controllers', [])
  .controller('menuItemController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
    $scope.routeParams = $location.path();
    $scope.itemselected = 0;
    switch ($scope.routeParams) {
      case '/home': $scope.itemselected = 0;  break;
      case '/nosotros': $scope.itemselected = 1;  break;
      case '/espacios': $scope.itemselected = 2;  break;
      case '/amenidades': $scope.itemselected = 3;  break;
      case '/habitaciones': $scope.itemselected = 4;  break;
      case '/restaurante': $scope.itemselected = 5;  break;
      case '/servicios': $scope.itemselected = 6;  break;
    }
    $scope.changerute = function(item){
      $scope.itemselected = item;
    }
  }])
  .controller('infoRoomDescriptionController', ['$scope', 'loveitService','$rootScope', function($scope, loveitService, $rootScope){
    $scope.active = true;
    $scope.item = 1;
    $scope.showItem = function(item){
      $scope.item = item;
    }
    $scope.spacesList = [];
    loveitService.getListSpaces().then(function(data){
      $scope.spacesList = data;
    });
    $scope.amenidadesList = [];
    loveitService.getListAmenidades().then(function(data){
      $scope.amenidadesList = data;
    });
    $scope.itemSelected = 0;
    $scope.changeItemSelected = function(item){
      $scope.itemSelected = item;
    }
  }])
  .controller('homeDescriptionController', ['$scope', 'loveitService','$rootScope', function($scope, loveitService, $rootScope){
    $scope.active = true;
    $scope.item = 1;
    $scope.showItem = function(item){
      $scope.item = item;
    }
    $scope.sliderList = [];
    loveitService.getListSlider().then(function(data){
      $scope.sliderList = data;
    });
  }])
  .controller('habitacionesDescriptionController', ['$scope', 'loveitService','$rootScope', function($scope, loveitService, $rootScope){
    $scope.active = true;
    $scope.item = 1;
    $scope.showItem = function(item){
      $scope.item = item;
      $scope.valor = 3;
      $scope.habitacionList = [];
      loveitService.getListHabitacionesId($scope.item).then(function(data){
        $scope.habitacionList = data;
      });
    }
    $scope.habitacionesList = [];
    loveitService.getListHabitaciones().then(function(data){
      $scope.habitacionesList = data;
    });
  }])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {};
    $scope.text = '';
    $scope.submit = function() {
      $scope.data = $scope.user;
      console.log($scope.data);
      // if ($scope.text) {
      //   $scope.user.push(this.text);
      //   $scope.text = '';
      // }
    };
  }]);

})();
