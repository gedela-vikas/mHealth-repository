angular.module('fitnessApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

    $urlRouterProvider.otherwise('/login');
    $httpProvider.interceptors.push('httpModifier');
    $stateProvider
    
    .state('login', {
            url: '/login',
            controller:'loginCtrl',
            templateUrl: 'templates/login.html'
        })
    .state('dashBoard.editPerson', {
            url: '/editPerson',
            controller:'editPersonCtrl',
            templateUrl: 'templates/editPerson.html',
            params:{
                personDetails:null
            }
        })
    .state('dashBoard.surveys', {
            url: '/surveys/:userID',
            controller:'surveysCtrl',
            templateUrl: 'templates/surveys.html'
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
            templateUrl: 'templates/editUser.html',
        params:{
        alluserDetails:null
      }
        
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
            templateUrl: 'templates/editCoach.html',
         params:{
        alluserDetails:null
      }
        })
     
     .state('dashBoard.appointment', {
            url: '/appointment',
            controller:'appointmentCtrl',
            templateUrl: 'templates/appointment.html'
        })
     .state('dashBoard.createAppointment', {
            url: '/createAppointment',
            controller:'createAppointmentCtrl',
            templateUrl: 'templates/createAppointment.html'
        })
      .state('dashBoard.viewAppointment', {
            url: '/viewAppointment/:id',
            controller:'viewAppointmentCtrl',
            templateUrl: 'templates/viewAppointment.html'
        })
     .state('dashBoard.editAppointment', {
            url: '/editAppointment/:id',
          controller:'editAppointmentCtrl',
            templateUrl: 'templates/editAppointment.html',
         params:{
        appointments:null
      }
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
            url: '/editTerms&Conditions/:tc',
            controller:'editTermsConditionsCtrl',
            templateUrl: 'templates/editTerms&Conditions.html',
            params:{
            termsConditions:null
           }
        })
    .state('dashBoard.privacyPolicy', {
            url: '/privacyPolicy',
            controller:'privacyPolicyCtrl',
            templateUrl: 'templates/privacyPolicy.html'
        })
    .state('dashBoard.editprivacyPolicy', {
            url: '/editprivacyPolicy',
            controller:'editprivacyPolicyCtrl',
            templateUrl: 'templates/editprivacyPolicy.html',
        params:{
            policies:null
           }
        })
    .state('dashBoard.aboutUs', {
            url: '/aboutUs',
            controller:'aboutUsCtrl',
            templateUrl: 'templates/aboutUs.html'
        })
  
});