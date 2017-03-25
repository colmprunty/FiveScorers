angular.module("FiveScorersApp", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl:"/home/home.view.html"
      })
      .otherwise({ redirectTo: "/"});
  }]);
