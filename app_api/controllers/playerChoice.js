var mongoose = require('mongoose');
var Choice = mongoose.model('PlayerChoice');
var User = mongoose.model('User');

var getUser = function(req, res, callback){
  if(req.payload && req.payload.email){
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user){
        if(!user){
          sendJsonResponse(res, 404, {
            "message" : "User not found"
          });
          return
        } else if (err){
          console.log(err);
          sendJsonResponse(res, 404, err);
          return;
        }
        callback(req, res, user.name);
      });
  } else {
    sendJsonResponse(res, 404, {
      "message" : "User not found"
    });
    return;
  }
};

module.exports.getPlayerChoices = function(req, res){
  Choice.find().
    exec(function(err, playerChoice){
      sendJsonResponse(res, 200, playerChoice);
    });
};

module.exports.choosePlayer = function(req, res){
  getUser(req, res, function(req, res, userName){
    Choice.create({
      name: req.body.playerName,
      userName: userName
    },
    function(err, player){
      if(err){
        sendJsonResponse(res, 400, err);
      } else {
        sendJsonResponse(res, 201, player);
      }
    });
  });
};

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};
