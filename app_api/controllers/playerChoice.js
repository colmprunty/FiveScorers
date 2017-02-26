var mongoose = require('mongoose');
var Choice = mongoose.model('PlayerChoice');

module.exports.getPlayerChoices = function(req, res){
  Choice.find().
    exec(function(err, playerChoice){
      sendJsonResponse(res, 200, playerChoice);
    });
};

module.exports.choosePlayer = function(req, res){
  Choice.create({
    name: req.body.playerName
  },
  function(err, player){
    if(err){
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, player);
    }
  });
};

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};
