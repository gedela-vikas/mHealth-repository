angular.module('fitnessApp')
.service('services', function () {
    this.logID = {};
})

.service('loginService', function ($http, $q, services) {

    this.user = function (params) {

        var deferred = $q.defer();
        $http.post('api/login', params)

        .then(function (objS) {
            deferred.resolve(objS);
            alert('server succesfull');
            console.log("Data in Params--->" + JSON.stringify(objS));
            services.logID = objS;
            console.log("hhjkhkk----"+JSON.stringify(services));
            
        }, function (objE) {
            deferred.reject("server Error");
        });
        return deferred.promise;
    }
})


.service('forgotService', function ($http, $q) {
    this.user = function (params) {

        var deferred = $q.defer();
        $http.post('api/forgotPass', params)

        .then(function (objS) {
            deferred.resolve(objS);
            alert('server succesfull');
            console.log("Data in Params--->" + JSON.stringify(params));
        }, function (objE) {
            deferred.reject("server Error");
        });

        $http.post('api/sendEmail', params)

        .then(function (objS) {
            deferred.resolve(objS);
            alert('server succesfull');
        }, function (objE) {
            deferred.reject("server Error");
        });
        return deferred.promise;
    }

})
.service('fetchService',function($q, $http,services){
    
     this.alluserDetails = function(usertype) {
    		var deff = $q.defer();
  			$http.get('api/user/'+usertype)
    		.then(function(success){
        		deff.resolve(success);
    		},function(error){
        		console.log(error);
    		});
         
  			return deff.promise;
  		}	
    })

.service('userdetailService',function($q, $http,services){
             console.log("logID--------"+JSON.stringify(services));
     this.alluserDetails = function(ID) {

    		var deff = $q.defer();
  			$http.get('api/userDetail/'+ID)
    		.then(function(success){
        		deff.resolve(success);
    		},function(error){
        		console.log(error);
    		});
  			return deff.promise;
  		}	
    })

.service('readService', function ($q, $http, services) {
    console.log("logID--------" + JSON.stringify(services));
    this.alluserDetails = function () {
        var deff = $q.defer();
        $http.post('api/edit', {
                user: service.logID
            })
            .then(function (success) {
                deff.resolve(success);
            }, function (error) {
                console.log(error);
            });
        return deff.promise;
    }
})


