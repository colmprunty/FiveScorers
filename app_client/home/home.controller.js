(function() {
  angular
    .module('FiveScorersApp')
    .controller('homeCtrl', homeCtrl);

    function homeCtrl (){
      var vm = this;
      vm.pageHeader = {
        title: "Welcome to the Five Scorers homepage"
      };
    }
  })();
