var express = require('express');
var router = express.Router();

var ctrlPlayerChoice = require('../controllers/playerChoice');

router.get('/choices', ctrlPlayerChoice.getPlayerChoices);

module.exports = router;
