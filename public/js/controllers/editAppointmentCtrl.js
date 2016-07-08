angular.module('fitnessApp')
.controller("editAppointmentCtrl",function($scope,$stateParams){
    console.log("--------------------");console.log($stateParams.appointments);console.log("--------------------");
  $scope.appointUpdate = $stateParams.appointments;
    /*var time1 = $stateParams.appointments.startAt;
    var time2 = $stateParams.appointments.startAt;
    */
   
})













