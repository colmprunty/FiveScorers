(function () {

  angular.module('FiveScorersApp', ['ngRoute', 'ngMaterial']);

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
      .when('/choices', {
        templateUrl: '/choices/choices.view.html',
        controller: 'choicesCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: '/auth/register/register.view.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }

  angular
    .module('FiveScorersApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();
