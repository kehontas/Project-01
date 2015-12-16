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

var cafeList =[];
cafeList.push({
            	cafeName: 'Blue Bottle',
  				cafeCity: 'San Francisco, New York, Los Angeles, Tokyo',
  				cafeUrl: 'https://bluebottlecoffee.com/',
  			});
cafeList.push({
            	cafeName: 'Four Barrel',
  				cafeCity: 'San Francisco',
  				cafeUrl: 'http://fourbarrelcoffee.com/',
  			});
cafeList.push({
            	cafeName: 'The Hive Place to Be',
  				cafeCity: 'Oakland',
  				cafeUrl: 'http://www.hive-cafe.com/',
  			});
cafeList.push({
            	cafeName: 'Highwire',
  				cafeCity: 'Oakland',
  				cafeUrl: 'http://www.highwirecoffee.com/',
  			});
cafeList.push({
            	cafeName: 'Ritual Coffee Roasters',
  				cafeCity: 'San Francisco, Napa',
  				cafeUrl: 'https://www.ritualroasters.com/',
  			});
cafeList.push({
            	cafeName: 'Starbucks',
  				cafeCity: 'Worldwide',
  				cafeUrl: 'http://store.starbucks.com'
  			});
cafeList.push({
            	cafeName: 'Steeltown',
  				cafeCity: 'Worldwide',
  				cafeUrl: 'http://steeltowncoffee.com/',
  			});


// db.Cafe.remove({}, function(err, cafes){

//   db.Cafe.create(cafeList, function(err, cafes){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all cafes:", cafes);
//     console.log("created", cafes.length, "cafe list");
//     process.exit();

beanList[0].beanLocations = cafeList[0];
beanList[1].beanLocations = [cafeList[1],cafeList[6]];
beanList[2].beanLocations = [cafeList[2], cafeList[3], cafeList[5]];
beanList[3].beanLocations = cafeList[4];
		
db.Bean.remove({}, function(err, beans){

  db.Bean.create(beanList, function(err, beans){
    if (err) { return console.log('ERROR', err); }
    console.log("all beans:", beans);
    console.log("created", beans.length, "bean types");
    process.exit();
});

		
});