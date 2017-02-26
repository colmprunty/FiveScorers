var request = require('request');

module.exports.playerList = function(req, res){
  res.render('players');
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
};

module.exports.makeChoice = function(req, res){
  var path = '/api/playerChoice';
  var postData = {
    playerName: req.body.playerName
  };

  var requestOptions = {
    url: "http://localhost:3030" + path,
    method: "POST",
    json: postData
  };

  request(requestOptions, function(err, response, body){
    console.log(body);
      res.redirect('/players');
  });
};
