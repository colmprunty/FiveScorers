(function(){

  angular
    .module('FiveScorersApp')
    .controller('choosePlayersCtrl' choosePlayersCtrl);

    function choosePlayersCtrl(){
      var vm = this;
      vm.pageHeader = {
        title: "This is from the player choice controller"
      };
      vm.onSubmit = function(){
        var name = vm.formData.playerName;
        vm.pageHeader = {
          title: name
        };
      };
    }
})();
