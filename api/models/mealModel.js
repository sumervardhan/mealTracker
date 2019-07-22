'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MealSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the meal'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  foodItems: {
    type: [],
    default: ['Unspecified Food Item']
  },
  totalCalories: {
    type: Number
  }
  
});

module.exports = mongoose.model('Meals', MealSchema);