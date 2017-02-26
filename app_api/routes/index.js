var express = require('express');
var router = express.Router();

var ctrlPlayerChoice = require('../controllers/playerChoice');

router.get('/choices', ctrlPlayerChoice.getPlayerChoices);
router.post('/playerChoice/:playerName', ctrlPlayerChoice.choosePlayer);

module.exports = router;
