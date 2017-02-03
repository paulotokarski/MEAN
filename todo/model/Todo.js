module.exports = function() {
  var db = require('./../libs/connectDB')();
  var Schema = require('mongoose').Schema;

  var Todo = Schema({
    text: String,
    isCompleted: Boolean
  });

  return db.model('todo', Todo)
}