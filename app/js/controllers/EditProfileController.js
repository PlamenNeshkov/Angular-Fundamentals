/*global angular*/
(function () {
  "use strict";

  var app = angular.module("eventsApp");
  app.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
      $scope.user = {};
      $scope.getGravatarUrl = gravatarUrlBuilder.build;
    }
  );
}());