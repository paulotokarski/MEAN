var express = require('express');
var router = express.Router();
var model = require('./../model/Pessoa')();

/* GET home page. */
router.get('/', (req, res, next) => {
  model.find({}, (err, models) => {
    if(err) console.log('Error ---> ' + err);
    res.render('index', { title: 'Express CRUD - MEAN'});
  })
});

router.get('/get', (req, res, next) => {
  model.find({}, (err, models) => {
    if(err) console.log('Error ---> ' + err);
    res.json(models);
  });
});

router.get('/del/:id', (req, res, next) => {
  var id = req.params.id;
  model.findById(id, function(err, model) {
    if(err) console.log('Error ---> ' + err);
    model.remove((err) => {
      if(err) console.log('Error ---> ' + err);      
      res.redirect('/');
    });
  });
});

router.post('/add', (req, res, next) => {
  var body = req.body;
  model.create({nome:body.nome, email:body.email, telefone:body.telefone}, (err, model) => {
    if(err) console.log('Error ---> ' + err);
    res.redirect('/');
  });
});

router.post('/update', (req, res, next) => {
  var body = req.body;
  model.update({_id:body._id}, body, {upsert:true}, (err, model) => {
    if(err) console.log('Error --> ' + err);
    res.redirect('/');
  });
});

module.exports = router;