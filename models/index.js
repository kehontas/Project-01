var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      "mongodb://localhost/cafeJSON");

var Bean = require('./bean');
var Cafe = require('./cafe');

module.exports.Bean = Bean;
module.exports.Cafe = Cafe;
