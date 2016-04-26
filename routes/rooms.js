'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('all the rooms ');
})

// var Todo = require('../models/todo');
// router.route('/')
// .get((req, res) => {
//   Todo.get((err, todos) => {
//     if(err){
//       return res.status(400).send(err);
//     }
//     res.send(todos);
//   });
// })
// .post((req, res) => {
//   Todo.create(req.body, err => {
//     if(err) {
//       return res.status(400).send(err);
//     }
//     res.send();
//   });
// });

module.exports = router;
