"use strict";

function loadModule(module, name) {
  name || (name = module);

  var loaded;
  angular.injector(['ng', module], false).invoke([name, function(module) {
    loaded = module;
  }]);

  return loaded;
}

describe('PeriodicalExecutor', function() {
  this.timeout(10);

  var PeriodicalExecutor = loadModule('PeriodicalExecutor');

  describe("#constructor", function() {
    it("executes callback periodically", function(done) {
      var times = 0;
      new PeriodicalExecutor(1, function() {
        times += 1;
        if (times == 2) {
          done();
        }
      });
    });
  });

  describe("#start", function() {
    it("start the timer", function(done) {
      var timer = new PeriodicalExecutor(2, done);

      timer.stop();
      timer.start();
    });
  });

  describe("#stop", function() {
    it("stops the timer", function(done) {
      var timer = new PeriodicalExecutor(2, function() {
        throw "this should not be executed";
      });

      timer.stop();

      setTimeout(done, 5);
    });
  });

  describe("#isRunning", function() {
    it("returns true if timer is running", function ()  {
      var timer = new PeriodicalExecutor(2, function() {});

      expect(timer.isRunning()).to.eq(true);
    });

    it("returns false if timer is running", function ()  {
      var timer = new PeriodicalExecutor(2, function() {});
      timer.stop();

      expect(timer.isRunning()).to.eq(false);
    });
  });
});
