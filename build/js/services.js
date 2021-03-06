(function(){
	angular.module('loveitSite.services', [])
	.factory('loveitService', ['$http', '$q', function ($http, $q) {
		function getListSpaces(){
			var deferred = $q.defer();
			$http.get('./php/services.php?namefunction=getListSpaces')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}
		function getListSlider(){
			var deferred = $q.defer();
			$http.get('./php/services.php?namefunction=getListSlider')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}
		function getListAmenidades(){
			var deferred = $q.defer();
			$http.get('./php/services.php?namefunction=getListAmenidades')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}		
		function getListHabitaciones(){
			var deferred = $q.defer();
			$http.get('./php/services.php?namefunction=getListHabitaciones')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}	
		function getListHabitacionesId(id){
			var deferred = $q.defer();
			$http.get('./php/services.php?namefunction=getListHabitacionesId&id='+id)
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}
		return {
			getListSpaces: getListSpaces,
			getListSlider: getListSlider,
			getListHabitaciones:getListHabitaciones,
			getListHabitacionesId: getListHabitacionesId,
			getListAmenidades: getListAmenidades
		}
	}]);
})();
