angular.module('fitnessApp')
.controller('dashboardCtrl', function($scope,logoutService){
    $scope.logout= function(){
        logoutService.logout();
    }
    
});