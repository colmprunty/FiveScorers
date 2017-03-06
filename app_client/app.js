angular.module('FiveScorersApp', ['ngRoute']);

function config($routeProvider){
  $routeProvider
    .when('/', {

    })
    .otherwise( { redirectTo: '/'});
}

angular
  .module('FiveScorersApp')
  .config(['$routeProvider', config]);
