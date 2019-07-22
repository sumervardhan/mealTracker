var express = require('express'),
  app = express(),
  port = 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/mealModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/mealRoutes'); //importing route
routes(app); //register the route

//Helps to redirect and respond whenever a bad request is made
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('Calorie Tracker server running on port: ' + port);