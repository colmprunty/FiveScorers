(function () {
    angular
        .module('FiveScorersApp')
        .service('authentication', authentication);

    authentication.$inject = ['$http','$window'];
    function authentication($http,$window){
        var saveToken = function(token){
            $window.localStorage['fiveScorersToken'] = token;
        };

        var getToken = function(){
            return $window.localStorage['fiveScorersToken'];
        };

        register = function(user){
            return $http.post('/api/register', user).then(function(result){
                saveToken(result.data.token);
            });
        };

        login = function(user){
            return $http.post('/api/login', user).then(function(result){
                saveToken(result.data.token);
            });
        };

        logout = function(){
            $window.localStorage.removeItem('fiveScorersToken');
        };

        var isLoggedIn = function(){
            var token = getToken();

            if(token){
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        var currentUser = function(){
            if(isLoggedIn()){
                var token = getToken();
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return {
                    email: payload.email,
                    name: payload.name
                };
            }
        };

        return {
            saveToken : saveToken,
            getToken : getToken,
            register : register,
            login : login,
            logout : logout,
            isLoggedIn : isLoggedIn,
            currentUser : currentUser
        };
    }
})();