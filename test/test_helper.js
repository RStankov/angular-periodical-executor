mocha.setup('bdd');
chai.config.includeStack = false;
chai.config.showDiff = true;
window.expect = chai.expect;

function loadModule(module, name) {
  name || (name = module);

  var loaded;
  angular.injector(['ng', module], false).invoke([name, function(module) {
    loaded = module;
  }]);

  return loaded;
}

