(function(){
  angular.module('agaleaPanel.controllers', [])
  .controller('menuNavController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
		$scope.routeParams = $location.path();
    $scope.selected = 0;
		switch ($scope.routeParams) {
			case '/amenidad': $scope.selected = 1;  break;
      case '/habitaciones': $scope.selected = 2;  break;
      case '/espacios': $scope.selected = 3;  break;
		}
		$scope.changeNav = function(item){
			$scope.selected = item;
		};
  }])
  .controller('viewNavController', ['$scope', function($scope){
		$scope.item = 1;
		$scope.selectItem = function(item){
			$scope.item = item;
		};
  }])
  .controller('productDataController', ['$scope', '$routeParams', 'agaleaService', function($scope, $routeParams, agaleaService){
    $scope.idProduct = $routeParams.id;    
    $scope.listProduct = [];
    $scope.listAmenidad = [];   
    $scope.listEspacios = [];
    $scope.listCategory = [];
    $scope.listSlider = [];
    $scope.loadProducts = function(){
      agaleaService.getProducts().then(function(data){
        $scope.listProduct = data;
      });
    }
    $scope.loadAmenidad = function(){
      agaleaService.getAmenidades().then(function(data){
        $scope.listAmenidad = data;
      });
    }  
    $scope.loadCategories = function(){
      agaleaService.getCategories().then(function(data){
        $scope.listCategory = data;
      });
    }
    $scope.loadEspacios = function(){
      agaleaService.getEspacios().then(function(data){
        $scope.listEspacios = data;
      });
    }  
    $scope.loadSlider = function(){
      agaleaService.getSlider().then(function(data){
        $scope.listSlider = data;
      });
    }      
    $scope.update = function(){
      $scope.loadProducts();
      $scope.loadAmenidad();  
      $scope.loadCategories();
      $scope.loadEspacios();
      $scope.loadSlider();
    }
    $scope.update();
    //This section is about fuction on change categories in add products.
    $scope.categorySelected = null;
    $scope.subCategorySelected = null;
  }])
  .controller('productDetailsController', ['$scope', '$routeParams', 'agaleaService', function($scope, $routeParams, agaleaService){
    $scope.idProduct = $routeParams.id;
    $scope.productDetails = []; 
    $scope.loadProducts = function(){
      agaleaService.productByItem($scope.idProduct).then(function(data){
        $scope.productDetails = data;
      });
    }
   $scope.loadProducts();
   //////////////////////////////////////////////
    $scope.idImagen = $routeParams.id;
    $scope.productDetails2 = [];    
    agaleaService.productByItem2($scope.idImagen).then(function(data){
      $scope.productDetails2 = data;
    });
    $scope.actualizarimg=function(){
      $scope.idImagen = $routeParams.id;
      $scope.productDetails2 = [];    
      agaleaService.productByItem2($scope.idImagen).then(function(data){
        $scope.productDetails2 = data;
      });
    }

  }])  
  .controller('amenidadDetailsController', ['$scope', '$routeParams', 'agaleaService', function($scope, $routeParams, agaleaService){
    $scope.idAmenidades = $routeParams.id;
    $scope.amenidadDetails = [];
    $scope.loadAmenidad = function(){
      agaleaService.amenidadByItem($scope.idAmenidades).then(function(data){
        $scope.amenidadDetails = data;
      });
    }
    $scope.loadAmenidad();

    $scope.idImagen = $routeParams.id;
    $scope.amenidadDetails2 = [];    
    agaleaService.amenidadByItem2($scope.idImagen).then(function(data){
      $scope.amenidadDetails2 = data;
    });
    $scope.actualizarimg=function(){
      $scope.idImagen = $routeParams.id;
      $scope.amenidadDetails2 = [];    
      agaleaService.amenidadByItem2($scope.idImagen).then(function(data){
        $scope.amenidadDetails2 = data;
      });
    }
  }]) 
  .controller('espaciosDetailsController', ['$scope', '$routeParams', 'agaleaService', function($scope, $routeParams, agaleaService){
    $scope.idEspacios = $routeParams.id;
    $scope.espaciosDetails = [];
    $scope.loadEspacios = function(){
      agaleaService.espaciosByItem($scope.idEspacios).then(function(data){
        $scope.espaciosDetails = data;
      });
    }
    $scope.loadEspacios();

    $scope.idImagen = $routeParams.id;
    $scope.espaciosDetails2 = [];    
    agaleaService.espaciosByItem2($scope.idImagen).then(function(data){
      $scope.espaciosDetails2 = data;
    });
    $scope.actualizarimg=function(){
      $scope.idImagen = $routeParams.id;
      $scope.espaciosDetails2 = [];    
      agaleaService.espaciosByItem2($scope.idImagen).then(function(data){
        $scope.espaciosDetails2 = data;
      });
    }
  }]) 
})();
