"use strict";

angular.module('PeriodicalExecutor', []).factory('PeriodicalExecutor', ['$interval', function($interval) {
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

  function PeriodicalExecutorFactory(frequency, callback) {
    return new PeriodicalExecutor(frequency, callback);
  }

  PeriodicalExecutorFactory.ONE_SECOND    =  1 * 1000;
  PeriodicalExecutorFactory.TWO_SECONDS   =  2 * 1000;
  PeriodicalExecutorFactory.THREE_SECONDS =  3 * 1000;
  PeriodicalExecutorFactory.FOUR_SECONDS  =  4 * 1000;
  PeriodicalExecutorFactory.FIVE_SECONDS  =  5 * 1000;

  return PeriodicalExecutorFactory;
}]);
