var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var BeanSchema = new Schema({
  beanName: String,
  beanOrigin: String,
  beanBody: String,
  beanRoast: String,
  beanAcidity: String,
  beanFlavor: String,
  //beanLocations: [Cafe.schema]
});

var Bean = mongoose.model('Bean', BeanSchema);

module.exports = Bean;