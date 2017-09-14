(function () {

  angular.module('FiveScorersApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl:"/home/home.view.html",
        controller: "homeCtrl",
        controllerAs: "vm"
      })
      .when('/players', {
        templateUrl: '/choosePlayers/choosePlayers.view.html',
        controller: 'choosePlayersCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  angular
    .module('FiveScorersApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();
