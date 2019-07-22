'use strict';


var mongoose = require('mongoose'),
Meal = mongoose.model('Meals');

exports.list_all_meals = function(req, res) {
  Meal.find({}, function(err, meal) {
    if (err)
      res.send(err);
    res.send(meal);
  });
};

exports.create_a_meal = function(req, res) {
  var new_meal = new Meal(req.body);
  new_meal.save(function(err, meal) {
    if (err)
      res.send(err);
    res.json(meal);
  });
};

exports.read_a_meal = function(req, res) {
  Meal.findById(req.params.mealId, function(err, meal) {
    if (err)
      res.send(err);
    res.json(meal);
  
  });
};


exports.update_a_meal = function(req, res) {
  Meal.findOneAndUpdate({_id: req.params.mealId}, req.body, {new: true}, function(err, meal) {
    if (err)
      res.send(err);
    res.json(meal);
  });
};

exports.delete_a_meal = function(req, res) {

Meal.remove({
    _id: req.params.mealId
  }, function(err, meal) {
    if (err)
      res.send(err);
    res.json({ message: 'Meal successfully deleted' });
  });
};
