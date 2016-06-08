angular.module('fitnessApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    
    .state('login', {
            url: '/login',
            controller:'loginCtrl',
            templateUrl: 'templates/login.html'
        })
    .state('dashBoard.adminPanel', {
            url: '/adminPanel',
            controller:'adminPanelCtrl',
            templateUrl: 'templates/adminPanel.html'
        })
   
        .state('forgotPassword', {
            url: '/forgotPassword',
            controller:'forgotPasswordCtrl',
            templateUrl: 'templates/forgotPassword.html'
        })
        .state('dashBoard', {
            url: '/dashBoard',
            controller:'dashboardCtrl',
            templateUrl: 'templates/dashBoard.html'
        })
     .state('dashBoard.userList', {
            url: '/userList',
            controller:'userListCtrl',
            templateUrl: 'templates/userList.html'
        })
     .state('dashBoard.viewUser', {
            url: '/viewUser/:id',
            controller:'viewUserCtrl',
            templateUrl: 'templates/viewUser.html'
        })
    .state('dashBoard.editUser', {
            url: '/editUser/:id',
            controller:'editUserCtrl',
            templateUrl: 'templates/editUser.html' 
        
        })
     .state('dashBoard.deleteUser', {
            url: '/deleteUser/:id',
            controller:'deleteUserCtrl',
            templateUrl: 'templates/deleteUser.html'
        })
    .state('dashBoard.coachList', {
            url: '/coachList',
           controller:'coachListCtrl',
            templateUrl: 'templates/coachList.html'
        })
      .state('dashBoard.viewCoach', {
            url: '/viewCoach/:id',
            controller:'viewCoachCtrl',
            templateUrl: 'templates/viewCoach.html'
        })
      .state('dashBoard.editCoach', {
            url: '/editCoach/:id',
            controller:'editCoachCtrl',
            templateUrl: 'templates/editCoach.html'
        })
      .state('dashBoard.deleteCoach', {
            url: '/deleteCoach/:id',
            controller:'deleteCoachCtrl',
            templateUrl: 'templates/deleteCoach.html'
        })
     .state('dashBoard.appointment', {
            url: '/appointment',
            controller:'appointmentCtrl',
            templateUrl: 'templates/appointment.html'
        })
      .state('dashBoard.viewAppointment', {
            url: '/viewAppointment',
            controller:'viewAppointmentCtrl',
            templateUrl: 'templates/viewAppointment.html'
        })
     .state('dashBoard.editAppointment', {
            url: '/editAppointment',
          controller:'editAppointmentCtrl',
            templateUrl: 'templates/editAppointment.html'
        })
     .state('dashBoard.deleteAppointment', {
            url: '/deleteAppointment',
            controller:'deleteAppointmentCtrl',
            templateUrl: 'templates/deleteAppointment.html'
        })
     .state('dashBoard.changePassword', {
            url: '/changePassword',
            controller:'changePasswordCtrl',
            templateUrl: 'templates/changePassword.html'
        })
    .state('dashBoard.terms&Conditions', {
            url: '/terms&Conditions',
            controller:'terms&ConditionsCtrl',
            templateUrl: 'templates/terms&Conditions.html'
        })
     .state('dashBoard.editTerms&Conditions', {
            url: '/editTerms&Conditionss',
            controller:'editTerms&ConditionsCtrl',
            templateUrl: 'templates/editTerms&Conditions.html'
        })
    .state('dashBoard.privacyPolicy', {
            url: '/privacyPolicy',
            controller:'privacyPolicyCtrl',
            templateUrl: 'templates/privacyPolicy.html'
        })
    .state('dashBoard.editprivacyPolicy', {
            url: '/editprivacyPolicy',
            controller:'editprivacyPolicyCtrl',
            templateUrl: 'templates/editprivacyPolicy.html'
        })
    .state('dashBoard.aboutUs', {
            url: '/aboutUs',
            controller:'aboutUsCtrl',
            templateUrl: 'templates/aboutUs.html'
        })
     .state('logOut', {
            url: '/logOut',
            controller:'logOutCtrl',
            templateUrl: 'templates/logOut.html'
        })

});