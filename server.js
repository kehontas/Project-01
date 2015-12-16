var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// serve static files from public folder
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/beans', function albumsIndex(req, res) {
  db.Bean.find({}, function(err, beans) {
    res.json(beans);
  	});
});

app.get('/beans/:id', function (req,res) {
	db.Bean.findOne({_id: req.params.id}, function (err, bean){
		// bean.locations = [
		// 					{
		// 	            		cafeName: 'Blue Bottle',
		// 	  					cafeCity: 'San Francisco, New York, Los Angeles, Tokyo',
		// 	  					cafeURL: 'https://bluebottlecoffee.com/',
		// 		  			},
		// 		  			{
		// 		            	cafeName: 'Four Barrel',
		// 		  				cafeCity: 'San Francisco',
		// 		  				cafeURL: 'http://fourbarrelcoffee.com/',
		// 		  			}
		// 	  			];
  		res.render('beans/show', bean);
	});  		
});

 // app.get('/cafes/:id', function (req, res ){
 // 	db.Cafe.findOne({_id: req.params.id}, function (err, cafe){
 // 		res.render('beans/show', cafe);
 // 	});
 // });

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
