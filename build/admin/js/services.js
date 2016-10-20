(function(){
  angular.module('agaleaPanel.services', [])
  .factory('agaleaService', ['$http', '$q', function($http, $q){
    /*Obtener habitaciones con img de la base de datos*/
    function getProducts(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getProducts')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function getProductsimg(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getProductsimg')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function getAmenidadesimg(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getAmenidadesimg')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function productByItem(id){
      var id = id;
      var deferred = $q.defer();
      getProducts().then(function(data){
        var result = data.filter(function(item){
          return item.idProduct === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result[0]);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }
    function productByItem2(id){
      var id = id;
      var deferred = $q.defer();
      getProductsimg().then(function(data){
        var result = data.filter(function(item){
          return item.idHabita === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }
    /*Mostrar los tipos de habitacion*/
    function getAmenidades(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getAmenidades')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function amenidadByItem(id){
      var id = id;
      var deferred = $q.defer();
      getAmenidades().then(function(data){
        var result = data.filter(function(item){
          return item.idAmenidades === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result[0]);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }    
    function amenidadByItem2(id){
      var id = id;
      var deferred = $q.defer();
      getAmenidadesimg().then(function(data){
        var result = data.filter(function(item){
          return item.idHabita === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }    
    /*Mostrar los tipos de amenidades*/
    function getCategories(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getCategories')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function getSubCategories(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getSubCategories')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function subcategoryByItem(id){
      var id = id;
      var deferred = $q.defer();
      getSubCategories().then(function(data){
        var result = data.filter(function(item){
          return item.idSubcategory === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result[0]);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }
    /*Obtener espacios con img de la base de datos*/
    function getEspacios(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getEspacios')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function getEspaciosimg(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getEspaciosimg')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function espaciosByItem(id){
      var id = id;
      var deferred = $q.defer();
      getEspacios().then(function(data){
        var result = data.filter(function(item){
          return item.idEspacios === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result[0]);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }
    function espaciosByItem2(id){
      var id = id;
      var deferred = $q.defer();
      getEspaciosimg().then(function(data){
        var result = data.filter(function(item){
          return item.idEspacios === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }
    return {
      getProducts: getProducts,
      getProductsimg: getProductsimg,
      getAmenidadesimg: getAmenidadesimg,
      productByItem: productByItem,  
      productByItem2: productByItem2,     
      getAmenidades: getAmenidades,
      amenidadByItem: amenidadByItem,
      amenidadByItem2: amenidadByItem2,      
      getCategories: getCategories,
      getSubCategories: getSubCategories,
      subcategoryByItem: subcategoryByItem,
      getEspacios: getEspacios,
      getEspaciosimg: getEspaciosimg,     
      espaciosByItem: espaciosByItem,
      espaciosByItem2: espaciosByItem2
    }
  }]);
})();
