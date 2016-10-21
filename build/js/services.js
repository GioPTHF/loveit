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
		function getListAmenidades(){
			var deferred = $q.defer();
			$http.get('./php/services.php?namefunction=getListAmenidades')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}

		return {
			getListSpaces: getListSpaces,
			getListAmenidades: getListAmenidades
		}
	}]);
})();
