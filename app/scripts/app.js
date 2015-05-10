'use strict';

var pravasa = angular
  .module('pravasaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise(""); 
    $stateProvider
      .state('home', {
        url: "",
        views: {
          'base': {  
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
          }
        }    
      })
      .state('detail', {
        url: "/detail",
        views:{
          'base':{
            templateUrl: "views/detail.html",
            controller: 'DetailCtrl'
          }
        }
        
    });


  });
