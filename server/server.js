var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// mongoose.connect();

app.use(express.static(path.join(__dirname + "../public")))

require('./config/middleware.js')(app, express)
require('./config/routes.js')(app, express)


var PORT = process.env.PORT || 8000;
app.listen(PORT)

module.exports = app;
