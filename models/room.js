'use strict';

var db = require('../config/db');
// console.log('model db', db);



//CREATE TABLE
db.query('CREATE TABLE IF NOT EXISTS HomeInventory.rooms (ID INT PRIMARY KEY AUTO_INCREMENT, location TEXT)');

exports.findAllRooms = function(cb){
  //SHOW ALL ITEMS
  db.query(`SELECT * FROM rooms`, cb);
}

exports.newRoom = function(newItem, cb){
  //CREATE INTO
  console.log('log newItem;', newItem.location);
  if(!newItem) { return cb('Missing required fields');}
  db.query(`INSERT INTO rooms (location) VALUES (?)`, newItem.location, cb);
}

exports.deleteRoom = function(id, cb){
  //DELETE BY ID
  if(!id) { return cb('Missing required fields');}
  db.query(`DELETE FROM rooms WHERE ID = ${id}`, cb);
}

exports.editRoom = function(reRoom, cb) {
  // EDIT
    //console.log(reRoom.location, reRoom.id);
    if(!reRoom.location || !reRoom.id) { return cb('Missing required fields');}

    db.query(`UPDATE rooms SET location = "${reRoom.location}" WHERE id = ${reRoom.id}`, cb);
};

exports.findOneRoom = function(id, cb){
  if(!id) { return cb('Missing required fields');}
  db.query(`SELECT * FROM rooms WHERE ID = ${id}`, cb);
}
