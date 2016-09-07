/*global angular*/
(function () {
  "use strict";
  var app = angular.module("eventsApp");

  app.controller("EventController", function ($scope, eventData) {
    eventData.getEvent(function (event) {
      $scope.event = event;
    });

    $scope.upvoteSession = function (session) {
      session.upVoteCount += 1;
    };

    $scope.downvoteSession = function (session) {
      session.upVoteCount -= 1;
    };

    $scope.sortorder = "name";
  });
}());