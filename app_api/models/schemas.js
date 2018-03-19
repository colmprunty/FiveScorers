var mongoose = require('mongoose');

var playerChoiceSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date
});

mongoose.model('PlayerChoice', playerChoiceSchema, 'playerChoice');
