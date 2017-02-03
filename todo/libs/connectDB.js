var mongoose = require('mongoose');
var db;

module.exports = function() {
  if(!db)
    db = mongoose.connect('mongodb://paulotokarski:pass@ds139198.mlab.com:39198/mydb');

  return db;
}