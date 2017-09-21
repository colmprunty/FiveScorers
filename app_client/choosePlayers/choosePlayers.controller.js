(function(){
  angular
    .module('FiveScorersApp')
    .controller('choosePlayersCtrl', choosePlayersCtrl);

    choosePlayersCtrl.$inject = ['scorerData'];
    function choosePlayersCtrl(scorerData){
      var vm = this;
      vm.pageHeader = {
        title: ""
      };

      vm.onSubmit = function(){
        scorerData.addChoice(vm.selectedItem.name);
        return true;
      };

      vm.allPlayers = [{"name": "shearer"}, {"name" : "cantona"}];
      vm.querySearch = querySearch;
      vm.selectedItemChange = selectedItemChange;

      function selectedItemChange(item) {
        vm.selectedItem = JSON.stringify(item);
      }

      function querySearch(query){
        return vm.allPlayers.filter(createFilterFor(query))
      };

      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
  
        return function filterFn(player) {
          return (player.name.indexOf(lowercaseQuery) === 0);
        };
      }
    }
})();
