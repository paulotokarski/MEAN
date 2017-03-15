var mongoose = require('mongoose');
var db;

module.exports = function() {
  if(!db)
    db = mongoose.connect('mongodb://<USER>:<PASSWORD>@<HOST>/<MYDB>');
  return db;
}
