(function() {
    angular
        .module('FiveScorersApp')
        .service('scorerData', scorerData);

    scorerData.$inject = ['$http'];
    function scorerData($http){
        var addChoice = function(){
            alert('in the service');
        };
    }
})();