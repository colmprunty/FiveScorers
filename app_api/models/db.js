var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/FiveScorers';
mongoose.connect(dbURI);

require('./schemas');
require('./users');