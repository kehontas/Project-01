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

app.get('/beans/:id', function (req,res) {
	db.Bean.findOne({_id: req.params.id}, function (err, bean){
			//console.log(bean.beanLocations.length );
  		res.render('beans/show', bean);
	});  		
});


app.get('/api/beans', function beansIndex(req, res) {
  db.Bean.find({}, function(err, beans) {
    res.json(beans);
  	});
});


app.post('/api/beans/:beanId/cafe', function (req,res) {
	console.log('req this',req.body);
	
	db.Bean.findOne({_id: req.params.beanId}, function createCafe(err, bean){
		if(err){console.log('error in cafe', err);}

		var cafe = new db.Cafe(req.body);
		bean.beanLocations.push(cafe);
		
		bean.save (function (err, savedCafe) {
		  
			if (err) {console.log('error in saving cafe: ', err); }
         	console.log(savedCafe, 'Bean has a new serving location! : ');
		
            res.json(bean.beanLocations);
		});
	});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
