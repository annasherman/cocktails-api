var express = require('express');
var router = express.Router();
var model = require('../models/Cocktail');

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.find(function(error, cocktails){
    if (error) console.log(error);
    res.json(cocktails);
  })
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id,function(error, cocktail){
    if (error) console.log(error);
    res.json(cocktail);
  });
});

//create
router.post('/', function(req, res, next) {
  model.create(req.body, function(error, cocktail){
    if (error) console.log(error);
    res.json(cocktail);
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, cocktail){
    if (error) console.log(error);
    res.json(cocktail);
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, cocktail){
    if (error) console.log(error);
    res.json(cocktail);
  });
});

router.delete('/:id', function(req, res, next){
  model.findByIdAndRemove(req.params.id, req.body, function(error,cocktail){
    if(error) console.log(error);
    res.json(cocktail);
  });

});

module.exports = router;
