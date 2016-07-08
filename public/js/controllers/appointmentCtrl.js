angular.module('fitnessApp')
.controller('appointmentCtrl', function($scope,$state,$http,fetchService){
  $scope.search={};
  $scope.appointments=[];
  $http.get('/appointment/find')
  .then(function(objS){
    angular.forEach(objS.data,function(val,indx){
      objS.data[indx].startAt=new Date(val.startAt);
      objS.data[indx].endAt=new Date(val.endAt);
    })
    $scope.appointments=objS.data;
       },function(err){
    alert("ERROR in fetching records");
    console.log("ERROR-->"+JSON.stringify(err));
  })
  
  /************* delete appointment ****************/
  
   $scope.appointmentdelete=function(_id){
     alert("Do you wan to Delete This Appointment?");
      if (confirm("Delete?") == true) {
        $http.post('appointment/appointdelete',
         { _id: _id,})
        .then(function(success){
          console.log(success);
        },function(error){
          console.log(error);
        })
      }
         $state.go("dashBoard");
     }
  
})
    
