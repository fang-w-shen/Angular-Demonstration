(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";
angular.module("EmployeeApp")
.controller("EmpCtrl",function($scope, EmployeeFactory){
  $scope.query = {};
  $scope.employees =[
  {
    "id" : "0xaef",
    "name" : "Brijesh Shah",
    "company" : "Syntel India Pvt. Ltd",
    "designation" : "0"
  },
  {
    "id" : "asdf1w",
    "name" : "Fang",
    "company" : "Fang Company",
    "designation" : "1"
  },
  {
    "id" : "asdp1w",
    "name" : "FaNg",
    "company" : "AIS",
    "designation" : "1"
  },
  {
    "id" : "afd2w",
    "name" : "Rob",
    "company" : "AscensionHealth",
    "designation" : "1"
  },
  {
    "id" : "e3f3w",
    "name" : "Adam",
    "company" : "AscensionHealth",
    "designation" : "1"
  }
  ];
  $scope.newEmp = {
    name:null,
    age:null,
    gender:null
  };

  $scope.addName = function(name) {
    $scope.newEmp.name = name;
    console.log("emp", $scope.newEmp);
    $(".carousel").carousel("next");
  };
  $scope.addAge = function(age) {
    $scope.newEmp.age = age;
    console.log("emp", $scope.newEmp);
    $(".carousel").carousel("next");
  };
  $scope.addGender = function(gender) {
    $scope.newEmp.gender = gender;
    console.log("emp", $scope.newEmp);
    EmployeeFactory.dostuff();
  };
  $scope.save = function() {
    console.log("save");

  };
});
},{}],3:[function(require,module,exports){
"use strict";
angular.module('EmployeeApp').factory("EmployeeFactory", function($q, $http){
    const dostuff = function() {
        console.log("hi");
    };

    // const fetchDB = function(user){
    //     let notes = [];
    //     return $q( (resolve, reject) => {
    //         $http.get(`db`)
    //         .then((itemObject) => {
    //             notes = itemObject.data;
    //             resolve(notes);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             });
    //     });
    // };

    // const deleteNote = function(id){
    //     $(".progress").css("visibility","visible");
    //     return $q( (resolve, reject) => {
    //         $http.delete(`${firebaseInfo.databaseURL}/notes/${id}.json`)
    //         .then((response) => {
    //             resolve(response);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    //     });
    // };

    // const addNote = (note) =>{
    //     if (firebase.auth().currentUser) {
    //         $(".progress").css("visibility","visible");
    //         let newnote = JSON.stringify(note);
    //         return $q( (resolve, reject) => {
    //             $http.post(`${firebaseInfo.databaseURL}/notes.json`,newnote)
    //             .then((response) => {

    //                 resolve(response);
    //                 })
    //                 .catch((error) => {
    //                     reject(error);
    //                 });
    //         });
    //     }
    // };

    // const editNote = function(id, obj) {
    //     $(".progress").css("visibility","visible");
    //     return $q((resolve, reject) => {
    //         let newObj = JSON.stringify(obj);
    //         $http.patch(`${firebaseInfo.databaseURL}/notes/${id}.json`, newObj)
    //         .then((data) => {
    //             resolve(data);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    //     });
    // };
    // return {fetchDB, addNote,deleteNote,editNote};
    return {dostuff};
});
},{}]},{},[1,2,3]);
