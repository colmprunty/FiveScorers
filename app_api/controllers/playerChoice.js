var mongoose = require('mongoose');
var Choice = mongoose.model('PlayerChoice');

module.exports.getPlayerChoices = function(req, res){
  Choice.find().
    exec(function(err, playerChoice){
      sendJsonResponse(res, 200, playerChoice);
    })
}

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};
