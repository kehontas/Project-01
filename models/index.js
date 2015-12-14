var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cafeJSON");
var Bean = require('./bean');

module.exports.Bean = Bean;

