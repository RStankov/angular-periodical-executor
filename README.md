[![Build Status](https://secure.travis-ci.org/RStankov/angular-periodical-executor.png)](http://travis-ci.org/RStankov/angular-periodical-executor)
[![Code Climate](https://codeclimate.com/github/RStankov/angular-periodical-executor.png)](https://codeclimate.com/github/RStankov/angular-periodical-executor)

PeriodicalExecutor
=====================

### Example usage

```js
app.controller('ExampleCtrl', function($scope, PeriodicalExecutor) {
  var timer = PeriodicalExecutor(10, function(){
    // ... code ...
  });

  $scope.$on('$destroy', function() {
    timer.stop();
  });
});
```

### Requirements

```
angular.js
```

### Installation

Include [src/periodical_executor.js](https://github.com/RStankov/angular-simple-format/blob/master/src/periodical_executor.js) into your page and then list `PeriodicalExecutor` as your module dependency.

```js
window.app = angular.module('YourApp', ['PeriodicalExecutor'])
```

### Running the tests

Install bower developer dependencies:

```
bower install
npm install
```

Run test by:

```
grunt test
```

### Contributing

Every fresh idea and contribution will be highly appreciated.

### License

MIT License.

