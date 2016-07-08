angular.module('fitnessApp')
.factory('promise_apis', function($http, $q) {
  return {
    surveysList: function(api_url,person) {
      console.log(person);
      var deferred = $q.defer();
      $http.post(api_url,person)
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    },
    getData: function(api_url) {
      var deferred = $q.defer();
      $http.get(api_url)
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    },
    updateData: function(api_url,QNo,a,_id) {
      var deferred = $q.defer();
      $http.post(api_url,{QNo:QNo,a:a,_id:_id})
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    },
    editData: function(api_url,details) {
      console.log(details);
      var deferred = $q.defer();
      $http.post(api_url,details)
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    },
    changeData: function(api_url,person) {
      console.log(person);
      var deferred = $q.defer();
      $http.post(api_url,person)
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    }
  }
});

