'use strict';

var express = require('express');
var router = express.Router();

var Rooms = require('../models/room');

router.route('/:id/:id')
.get((req, res) => {
  Rooms.findAllRooms((err, rooms) => {
    if(err){
      return res.status(400).send(err);
    }
    res.send(rooms);
  });
})
.post((req, res) => {
  Rooms.newRoom(req.body, (err, data) => {
    console.log('post in', req.body);
    if(err){
      return res.status(400).send(err);
    }
    res.send(req.body);
  });
})
.put((req, res) => {
  Rooms.editRoom(req.body, err => {
    if(err){
      return res.status(400).send(err);
    }
    res.send(req.body); //.render('home', req.body);
  });
})
.delete((req, res) => {
  Rooms.deleteRoom(req.body.id, err => {
    if(err) return res.status(400).send(err);
    res.send(req.body);
  });
});

//find ONE
router.get('/:id', (req, res) => {
  Rooms.findOneRoom(req.params.id, err => {
    if(err) return res.status(400).send(err);
    res.send(req.body);
  });
});

module.exports = router;
