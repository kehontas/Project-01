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

// app.get('/testpage', function(req,res){
//   res.render('test', { title: 'Awesome Post', text: 'Lorem ipsum dolor'});
// });



app.get('/beans/:id', function(req,res) {
	db.Bean.findOne({_id: req.params.id}, function(err, bean){ 
  		res.render('beans/show', bean);
	});  		
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
