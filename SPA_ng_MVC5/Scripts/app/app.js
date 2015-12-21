/// <reference path="../angular.js" />

var module = angular.module('StudentApp', ['ngRoute','studentController', 'studentResource']);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'GetStudentList'
        });
}]);