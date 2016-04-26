'use strict';

var express = require('express');
var router = express.Router();

router.use('/rooms', require('./rooms'));

router.use('/items', require('./items'));

module.exports = router;
