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

app.delete("/api/beans/:beanId/cafe/:id", function (req, res) {
	
	var beanId = req.params.beanId;
	var cafeId = req.params.id;

	db.Bean.findOne({_id: beanId}, function (err, foundBean) {
		
		var foundCafe = foundBean.beanLocations.id(cafeId);
		
		
		foundCafe.remove();
		
		foundBean.save(function(err, saved){
			if(err) {console.log(err); }
		 		res.json(saved);
		 	});
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

app.put('/api/beans/:beanId/cafe', function (req, res) {
  // set the value of the list and todo ids
  var beanId = req.params.beanId;
  var cafeId = req.params.id;

  // find list in db by id
  List.findOne({_id: beanId}, function (err, foundList) {
    // find todo embedded in list
    console.log(foundlist);
    var foundCafe = foundList.cafe.id(cafeId);
    // update todo text and completed with data from request body
    foundCafe.text = req.body.todo.text;
    foundCafe.completed = req.body.todo.completed;
    foundBean.save(function (err, savedList) {
      res.json(foundCafe);
    });
  });
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
