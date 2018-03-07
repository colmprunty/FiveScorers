(function() {
    angular
        .module('FiveScorersApp')
        .service('scorerData', scorerData);

    scorerData.$inject = ['$http', 'authentication'];
    function scorerData($http, authentication){
        var addChoice = function(playerName){
            var data = {
                playerName: playerName
            };
            return $http.post('/api/playerChoice', data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var getChoices = function(){
            return $http.get('/api/choices');
        };

        return {
            addChoice : addChoice,
            getChoices : getChoices
        };
    }
})();