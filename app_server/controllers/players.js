var request = require('request');

module.exports.playerList = function(req, res){
  res.render('players', { title : "Just a list of players at the moment", players : ["Aguero", "Zlatan"]});
}

module.exports.choices = function(req, res){
  var requestOptions, path;
  path = "/api/choices"
  requestOptions = {
    url: "http://localhost:3030" + path,
    method: "GET",
    json: {}
  };

  request(requestOptions, function(err, response, body){
    var data = body;
    res.render('choices', {title: "this is working", choices: data});
  });
}

module.exports.makeChoice = function(req, res){
  res.render('makeChoice', { title : "Choose players" });
}
