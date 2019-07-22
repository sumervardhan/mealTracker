'use strict';
module.exports = function(app) {
var todoList = require('../controllers/mealController');

  // todoList Routes
  app.route('/meals')
    .get(todoList.list_all_meals)
    .post(todoList.create_a_meal);


  app.route('/meals/:mealId')
    .get(todoList.read_a_meal)
    .put(todoList.update_a_meal)
    .delete(todoList.delete_a_meal);
};