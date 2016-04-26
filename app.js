'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/api', require('./routes/api'));

app.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});
