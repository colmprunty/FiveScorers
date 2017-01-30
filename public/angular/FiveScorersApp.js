angular.module('FiveScorersApp', []);

var playerListCtrl = function($scope){
  $scope.data = {
    title: "Five Angular Scorers",
    players:
      [
        { name: "Cantona" },
        { name: "Shearer" }
      ]
  };
};

angular
  .module('FiveScorersApp')
  .controller('playerListCtrl', playerListCtrl);
