angular.module('FiveScorersApp', ['ngRoute']);

function config($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/home/home.view.html'
    })
    .otherwise( { redirectTo: '/'});
}

angular
  .module('FiveScorersApp')
  .config(['$routeProvider', config]);
