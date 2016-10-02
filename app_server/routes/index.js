var express = require('express');
var router = express.Router();
var ctrlPlayers = require('../controllers/players');
var ctrlHome = require('../controllers/home')

router.get('/players', ctrlPlayers.playerList);
router.get('/choices', ctrlPlayers.choices)
router.get('/', ctrlHome.index)

module.exports = router;
