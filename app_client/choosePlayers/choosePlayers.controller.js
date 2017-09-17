(function(){
  angular
    .module('FiveScorersApp')
    .controller('choosePlayersCtrl', choosePlayersCtrl);

    choosePlayersCtrl.$inject = ['scorerData'];
    function choosePlayersCtrl(scorerData){
      var vm = this;
      vm.pageHeader = {
        title: "This is really from the player choice controller"
      };

      vm.onSubmit = function(){
        var name = vm.formData.playerName;
        scorerData.addChoice();
        return true;
      };
    }
})();
