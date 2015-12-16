var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cafeJSON");
var Bean = require('./bean');
var Cafe = require('./cafe');

module.exports.Bean = Bean;
module.exports.Cafe = Cafe;
