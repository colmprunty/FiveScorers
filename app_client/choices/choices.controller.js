(function(){
    angular
        .module('FiveScorersApp')
        .controller('choicesCtrl', choicesCtrl);

    choicesCtrl.$inject = ['scorerData'];    
    function choicesCtrl(scorerData){

        var vm = this;
        vm.pageHeader = {
            title: "This is what you've chosen"
        };

        scorerData.getChoices()
            .then(function(data){
                vm.choices = data.data;
            });
        }
})();