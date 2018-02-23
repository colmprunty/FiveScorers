var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var ctrlPlayerChoice = require('../controllers/playerChoice');
var ctrlAuth = require('../controllers/authentication');

router.get('/choices', auth, ctrlPlayerChoice.getPlayerChoices);
router.post('/playerChoice', auth, ctrlPlayerChoice.choosePlayer);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
