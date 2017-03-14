var express = require('express');
var mongoose = require('mongoose');

var app = express();

// mongoose.connect();

require('./config/middleware.js')(app, express)
require('./config/routes.js')(app, express)


var PORT = process.env.PORT || 8000;
app.listen(PORT)

module.exports = app;
