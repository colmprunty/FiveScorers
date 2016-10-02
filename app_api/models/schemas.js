var mongoose = require('mongoose');

var playerChoiceSchema = new mongoose.Schema({
  name: String
});

mongoose.model('PlayerChoice', playerChoiceSchema, 'playerChoice');
