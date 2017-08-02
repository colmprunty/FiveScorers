(function () {

  angular.module('FiveScorersApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl:"./home/home.view.html",
        controller: "homeCtrl",
        controllerAs: "vm"
      })
      .when('/players', {
        templateUrl: './common/views/choosePlayers.view.html',
        controller: 'playerChoiceCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }

  angular
    .module('FiveScorersApp')
    .config(['$routeProvider', config]);

})();
