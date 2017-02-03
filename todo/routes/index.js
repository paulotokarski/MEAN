var express = require('express');
var router = express.Router();

var todoModel = require('./../model/Todo')();

/* GET Todos */
router.get('/todos', (req, res, next) => { 
  todoModel.find({}, (err, todos) => {
    if(err) res.send(err)
    else    res.json(todos)
  })
});

/* POST add Todo */
router.post('/add', (req, res, next) => {
  var todo = req.body.todo;

  todoModel.create(todo, (err, todo) => {
    if(err) res.send(err)
    else    res.redirect('/')
  })
});

/* POST del Todo */
router.post('/del', (req, res, next) => {
  var id = req.body.todo._id;
  todoModel.remove({ _id: id }, (err, todo) => {
    if(err) console.log(err)
    else    res.redirect('/')
  })
});

/* POST update Todo */
router.post('/update', (req, res, next) => {
  var todo = req.body.todo;

  todoModel.update({ _id: todo._id }, todo, { upsert: true }, (err, model) => {
    if(err) console.log(err)
    else    res.redirect('/')
  })
})

module.exports = router;
