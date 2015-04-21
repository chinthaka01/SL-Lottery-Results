/**
 * Created by Chinthaka on 4/17/15.
 */

(function() {
  'use strict';
  angular.module('sl-lottery-results.home', [])

    .controller('HomeCtrl', [
      '$scope',
      '$ionicNavBarDelegate',
      function($scope,
               $ionicNavBarDelegate) {
        $scope.initialization = function() {
        };

        $scope.initialization();
      }
    ]);
})();