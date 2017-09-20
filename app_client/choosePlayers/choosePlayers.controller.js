(function(){
  angular
    .module('FiveScorersApp')
    .controller('choosePlayersCtrl', choosePlayersCtrl);

    choosePlayersCtrl.$inject = ['scorerData'];
    function choosePlayersCtrl(scorerData){
      var vm = this;
      vm.pageHeader = {
        title: "Choose your player from the box below"
      };

      vm.onSubmit = function(){
        var playerName = vm.formData.playerName;
        scorerData.addChoice(playerName);
        return true;
      };

      vm.allPlayers = [{"name": "shearer", "name" : "cantona"}];
      vm.querySearch = querySearch;

      function querySearch(query){
        return vm.allPlayers.filter(createFilterFor(query))
      };

      function createFilterFor(query) {
        console.log(query);
        var lowercaseQuery = angular.lowercase(query);
  
        return function filterFn(player) {
          return (player.value.indexOf(lowercaseQuery) === 0);
        };
  
      }
    }
})();
