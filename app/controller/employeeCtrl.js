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