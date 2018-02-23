var mongoose = require('mongoose');

var playerChoiceSchema = new mongoose.Schema({
  name: String,
  userName: String
});

mongoose.model('PlayerChoice', playerChoiceSchema, 'playerChoice');
