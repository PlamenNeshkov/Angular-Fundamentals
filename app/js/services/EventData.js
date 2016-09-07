/*global angular*/
(function () {
  "use strict";

  var app = angular.module("eventsApp");

  app.factory("eventData", function ($http, $log) {
    return {
      getEvent: function (callback) {
        $http.get("/data/event/1.json")
          .then(function successCallback(response) {
            callback(response.data);
          }, function errorCallback(response) {
            $log.warn(response);
          });
      }
    };
  });
}());