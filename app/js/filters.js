/*global angular*/
(function () {
  "use strict";
  var app = angular.module("eventsApp");

  app.filter("durations", function () {
    return function (duration) {
      switch (duration) {
      case 1:
        return "Half Hour";
      case 2:
        return "1 Hour";
      case 3:
        return "Half Day";
      case 4:
        return "Full Day";
      }
    };
  });
}());