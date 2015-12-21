/// <reference path="../angular.js" />

var studentController = angular.module("studentController", []);

studentController.controller("GetStudentList", function ($scope, $http) {
    $http.get("/api/students").success(function (data) {
        $scope.students = data;
    })
});