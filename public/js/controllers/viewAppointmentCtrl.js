angular.module('fitnessApp')
.controller("viewAppointmentCtrl",function($scope,$state,$http,appointService,$stateParams){
  /* alert(1);*/
   /* 
    $http.get('/appointment/appointDetail')
        .success(function(data) {
            $scope.appointments = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    */
   
     appointService.appointments($stateParams.id).then(function(success){
    /*  console.log("appointment------->"+JSON.stringify(success));*/
      $scope.appointments = success.data;
        /* console.log("appointment------->"+JSON.stringify(success.data));*/
    },function(error){
      console.log(error);
    });
    
    
  });
   
