var db = require("./models");

var beanList =[];
beanList.push({
            	beanName: 'Cero Azul: Geisha',
  				beanOrigin: 'Columbia',
  				beanRoast: 'Medium',
  				beanBody: '9',
  				beanAcidity: '9',
  				beanFlavor: '9'
            });
beanList.push({
            	beanName: 'Nicaragua Los Duende',
  				beanOrigin: 'Nueva Segovia',
  				beanRoast: 'Light',
  				beanBody: '9',
  				beanAcidity: '9',
  				beanFlavor: '9',
            });
beanList.push({
            	beanName: 'Batak Sumatra',
  				beanOrigin: 'North Sumatra',
  				beanRoast: 'Light',
  				beanBody: '9',
  				beanAcidity: '9',
  				beanFlavor: '9',
            });
beanList.push({
            	beanName: 'Organic Hama',
  				beanOrigin: 'Ethopia',
  				beanRoast: 'Medium-Light',
  				beanBody: '8',
  				beanAcidity: '8',
  				beanFlavor: '9',
            });


db.Bean.remove({}, function(err, beans){

  db.Bean.create(beanList, function(err, beans){
    if (err) { return console.log('ERROR', err); }
    console.log("all beans:", beans);
    console.log("created", beans.length, "bean types");
    process.exit();
});

});