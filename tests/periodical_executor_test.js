"use strict";

function loadModule(module, name) {
  name || (name = module);

  var loaded;
  angular.injector(['ng', module], false).invoke(function() {
  });

  return loaded;
}

describe('PeriodicalExecutor', function() {
  this.timeout(10);

  it("executes callback periodically", function(done) {
    var times = 0;
    new PeriodicalExecutor(1, function() {
      times += 1;
      if (times == 2) {
        done();
      }
    });
  });

  it("can be stopped from .stop", function(done) {
    var timer = new PeriodicalExecutor(2, function() {
      throw "this should not be executed";
    });

    timer.stop();

    setTimeout(done, 5);
  });

  it("can be restarted with .start", function(done) {
    var timer = new PeriodicalExecutor(2, done);

    timer.stop();
    timer.start();
  });
});
