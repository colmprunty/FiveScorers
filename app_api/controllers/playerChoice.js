var mongoose = require('mongoose');
var Choice = mongoose.model('PlayerChoice');

module.exports.getPlayerChoices = function(req, res){
  Choice.find().
    exec(function(err, playerChoice){
      sendJsonResponse(res, 200, playerChoice);
    });
}

var choosePlayer = function(req, res){

}

module.exports.choosePlayer = function(req, res){
  Choice.create({
    name: req.params.playerName
  },
  function(err, location){
    if(err){
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, location);
    }
  });
};

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};
