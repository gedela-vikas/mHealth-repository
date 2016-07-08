angular.module('fitnessApp')
.controller('createAppointmentCtrl', function($scope,fetchService,$http){
  $scope.search={};
  $scope.coaches=[];
  $scope.users=[];
  $scope.appointmentDetail={};
  $scope.selected={
    User:null,
    Coach:null
  };
  //$scope.selectedCoach={};
  $scope.create=function(){
  $scope.appointmentDetail.coach=$scope.selected.Coach._id;
  $scope.appointmentDetail.user=$scope.selected.User._id;
    var startAt=new Date($scope.appointmentDetail.date);
    var times=$scope.appointmentDetail.time.split(':');
    var hh=parseInt(times[0]);
    var mm=parseInt(times[1]);
    startAt.setHours(hh);
    startAt.setHours(mm);
    $scope.appointmentDetail.startAt=startAt;
    var endAt=new Date($scope.appointmentDetail.date)
    endAt.setHours(hh+2);
    endAt.setMinutes(mm);
    $scope.appointmentDetail.endAt=endAt;
    
    delete $scope.appointmentDetail.date;
    delete $scope.appointmentDetail.num;
    delete $scope.appointmentDetail.time;
    
    $http.post('/appointment/save',$scope.appointmentDetail)
    .then(function(success){
     alert("Appointment create successfully");
      $scope.appointmentDetail={};
    },function(error){
      alert("Error in saving records");
      console.log("ERROR-->>"+JSON.stringify(error));
    });
  }
  fetchService.alluserDetails("COACH").then(function(success){
    $scope.coaches=success.data; 
  },function(error){
    
  });
  fetchService.alluserDetails("USER").then(function(success){
    $scope.users=success.data; 
  },function(error){
    
  });
  
})