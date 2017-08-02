(function() {
  angular
    .module('FiveScorersApp')
    .controller('playerChoiceCtrl', playerChoiceCtrl);

    function playerChoiceCtrl (){
      var vm = this;
      vm.pageHeader = {
        title: "This is from the player choice controller"
      };
    }
  })();
