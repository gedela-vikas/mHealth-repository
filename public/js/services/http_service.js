angular.module('fitnessApp')
.service('services', function () {
    this.logID = {};
})


.service('loginService', function ($http, $q, services) {
    this.user = function (params) {
        var deferred = $q.defer();
        $http.post('api/login', params)

        .then(function (objS) {

            if(objS.status != "404")
            {
                 localStorage.serverToken=objS.headers('token');
                    deferred.resolve(objS);
                alert('server succesfull');
                  services.logID = objS;
            }
            else{
                deferred.reject("server Error");
        
            }
           
            }, function (objE) {
          console.log(objE)
        });
        return deferred.promise;
    }
 
})


.service('logoutService',function($state,$window, services){
      this.logout=function(){
        $window.localStorage.clear();
        $state.go('login');
    }
  })

.service('forgotService', function ($http, $q, services) {
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
            alert('email sent succesfull');
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
/*             console.log("logID--------"+JSON.stringify(services));*/
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

.service('tcService',function($q, $http,services){
    console.log("tc");
    this.data=null;
     this.termsConditions = function(usertype) {
         var deff = $q.defer();
  			$http.get('api/tc/'+usertype)
    		.then(function(success){
        		deff.resolve(success);
              data=JSON.stringify(success);
                console.log("service access -----"+data);
    		},function(error){
        		console.log(error);
    		});
         
  			return deff.promise;
  		}	
    })


.service('ppService',function($q, $http,services){
    console.log("tc");
    this.data=null;
     this.policies = function(usertype) {
         var deff = $q.defer();
  			$http.get('api/pp/'+usertype)
    		.then(function(success){
        		deff.resolve(success);
              data=JSON.stringify(success);
                console.log("service access -----"+data);
    		},function(error){
        		console.log(error);
    		});
         
  			return deff.promise;
  		}	
    })

.factory('httpModifier',function($location){
      return{
          request:function(config){
              config.headers.servertoken=localStorage.serverToken;
              return config;
          },
          requestError:function(config){
              return config;
          },
          response:function(config){
              return config;
          },
          responseError:function(config){
              if(config.status==403)
                  $location.path('login')
                  
                  return config;
          }
      }
  })

.service('appointService',function($q, $http,services){
       this.appointments = function(ID) {
    		var deff = $q.defer();
    $http.get('/appointment/appointDetail/'+ID)
    		.then(function(success){
        		deff.resolve(success);
    		},function(error){
        		console.log(error);
    		});
  			return deff.promise;
  		}	
    })









