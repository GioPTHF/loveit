(function(){
  angular.module('loveitSite.services', [])
  .factory('loveitService', ['$http', '$q', function($http, $q){
    function getImagesSliderHome(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getImagesSliderHome')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function getProducts(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getProducts')
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
    function getBlogTips(){
      var deferred = $q.defer();
      $http.get('./../php/services.php?namefunction=getBlogTips')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function blogTipsByItem(id){
      var id = id;
      var deferred = $q.defer();
      getBlogTips().then(function(data){
        var result = data.filter(function(item){
          return item.idBlogtip === id;
        });
        if(result.length > 0 ){
          deferred.resolve(result[0]);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }
    function getImagesLibrary(){
      var deferred = $q.defer();
      $http.get('http://localhost/www/loveit/build/php/services.php?namefunction=getImagesLibrary')
        .success(function(data){
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    function getNombre(){
      var deferred = $q.defer();
      $http.get('http://localhost/www/loveit/build/php/services.php?namefunction=getNombre')
        .success(function(data){
          deferred.resolve(data);
      });
      return deferred.promise;
    }
    function getDescripcion(){
      var deferred = $q.defer();
      $http.get('http://localhost/www/loveit/build/php/services.php?namefunction=getDescripcion')
        .success(function(data){
          deferred.resolve(data);
      });
      return deferred.promise;
    }    

    function getImagesHabitacion(){
      var deferred = $q.defer();
      $http.get('http://localhost/www/loveit/build/php/services.php?namefunction=getImagesHabitacion&id=')
        .success(function(data){
          deferred.resolve(data);
      });
      return deferred.promise;      

    }

    function getImagesHabitacion2(){
      var deferred = $q.defer();
      $http.get('http://localhost/www/loveit/build/php/services.php?namefunction=getImagesHabitacion&id='+id)
        .success(function(data){
          deferred.resolve(data);
      });
      return deferred.promise;      

    }    



    return {
      getImagesSliderHome: getImagesSliderHome,
      getProducts: getProducts,
      productByItem: productByItem,
      getCategories: getCategories,
      getSubCategories: getSubCategories,
      subcategoryByItem: subcategoryByItem,
      getBlogTips: getBlogTips,
      blogTipsByItem: blogTipsByItem,
      getImagesLibrary: getImagesLibrary,
      getNombre: getNombre,
      getDescripcion: getDescripcion,
      getImagesHabitacion: getImagesHabitacion
    }
  }]);
})();
