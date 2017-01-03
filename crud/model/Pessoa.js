module.exports = function() {
  var db = require('./../libs/connectDB')();
  var Schema = require('mongoose').Schema;

  var Pessoa = Schema({
    nome: String,
    email: String,
    telefone: String
  });

  return db.model('pessoas', Pessoa);
}