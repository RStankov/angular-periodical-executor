"use strict";

angular.module('PeriodicalExecutor', []).factory('PeriodicalExecutor', function($interval) {

  function PeriodicalExecutor(frequency, callback) {
    var currentlyRunning = false;
    this.tick = function() {
      if (!currentlyRunning) {
        try {
          currentlyRunning = true;
          callback();
        } finally {
          currentlyRunning = false;
        }
      }
    };

    this.frequency = frequency;

    this.start();
  }

  PeriodicalExecutor.prototype.isRunning = function () {
    return !!this.timer;
  }

  PeriodicalExecutor.prototype.start = function() {
    if (!this.timer) {
      this.timer = $interval(this.tick, this.frequency);
    }
  };

  PeriodicalExecutor.prototype.stop = function() {
    if (this.timer) {
      $interval.cancel(this.timer);
      this.timer = null;
    }
  };

  return function(frequency, callback) {
    return new PeriodicalExecutor(frequency, callback);
  };
});
