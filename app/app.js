"use strict";
angular.module('EmployeeApp', ['ngRoute']);

angular.module('EmployeeApp').config(function ($routeProvider) {


    $routeProvider
        .when('/home', {
            templateUrl: '../index.html',
            controller: 'EmpCtrl'
        })
        .otherwise('/home');
}).run();