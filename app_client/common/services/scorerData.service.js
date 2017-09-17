(function() {
    angular
        .module('FiveScorersApp')
        .service('scorerData', scorerData);

    scorerData.$inject = ['$http'];
    function scorerData($http){
        var addChoice = function(playerName){
            var data = {
                playerName: playerName
            };
            return $http.post('/api/playerChoice', data);
        };

        return {
            addChoice : addChoice
        };
    }
})();