var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Bean = require('./bean');

var CafeSchema = new Schema({
  cafeName: String,
  cafeCity: String,
  cafeUrl: String
 
});

var Cafe = mongoose.model('Cafe', CafeSchema);

module.exports = Cafe;