'use strict';

/**
 * @ngdoc function
 * @name angular15AppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular15AppApp
 */
angular.module('angular15AppApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://localhost:8001/getNames').then(function(response) {
          $scope.names = response.data;
    });

  });
