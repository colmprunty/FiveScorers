(function() {
  angular
    .module('FiveScorersApp')
    .controller('homeCtrl', homeCtrl);

    function homeCtrl (){
      var vm = this;
      vm.pageHeader = {
        title: "Some number of scorers from home.controller.js"
      };
    }
  })();
