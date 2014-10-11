angular.module('PeriodicalExecutor', []);

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

PeriodicalExecutor.prototype.start = function() {
  if (!this.timer) {
    this.timer = setInterval(this.tick, this.frequency);
  }
}

PeriodicalExecutor.prototype.stop = function() {
  if (this.timer) {
    clearInterval(this.timer);
    this.timer = null;
  }
}
