/*global angular*/
(function () {
  "use strict";
  var app = angular.module("eventsApp");

  app.controller("EditEventController", function ($scope) {
    $scope.saveEvent = function (event, newEventForm) {
      if (newEventForm.$valid) {
        window.alert("test");
      }
    };

    $scope.cancelEdit = function () {
      window.location = "EventDetails.html";
    };
  });
}());