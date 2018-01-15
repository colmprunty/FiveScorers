var express = require('express');
var router = express.Router();

var ctrlPlayerChoice = require('../controllers/playerChoice');
var ctrlAuth = require('../controllers/authentication');

router.get('/choices', ctrlPlayerChoice.getPlayerChoices);
router.post('/playerChoice', ctrlPlayerChoice.choosePlayer);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
