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

var cafeList =[];
cafeList.push({
            	cafeName: 'Blue Bottle',
  				cafeCity: 'San Francisco, New York, Los Angeles, Tokyo',
  				cafeURL: 'https://bluebottlecoffee.com/',
  			});
cafeList.push({
            	cafeName: 'Four Barrel',
  				cafeCity: 'San Francisco',
  				cafeURL: 'http://fourbarrelcoffee.com/',
  			});
cafeList.push({
            	cafeName: 'The Hive Place to Be',
  				cafeCity: 'Oakland',
  				cafeURL: 'http://www.hive-cafe.com/',
  			});
cafeList.push({
            	cafeName: 'Highwire',
  				cafeCity: 'Oakland',
  				cafeURL: 'http://www.highwirecoffee.com/',
  			});
cafeList.push({
            	cafeName: 'Ritual Coffee Roasters',
  				cafeCity: 'San Francisco, Napa',
  				cafeURL: 'https://www.ritualroasters.com/',
  			});
cafeList.push({
            	cafeName: 'Starbucks',
  				cafeCity: 'Worldwide',
  				cafeURL: 'http://store.starbucks.com/on/demandware.store/Sites-Starbucks-Site/default/Default-Start?&utm_medium=cpc&gclid=CjwKEAiAkb-zBRC2upezwuyguQ4SJADZG08vYDDDV6EIP3UlZx2bU-maMZQwMtPpYO0B6OpvqL8EdxoCSsrw_wcB&utm_source=google&utm_campaign=EC+-+Starbucks+Exact+-+Desktop_Tablet&utm_term=starbucks&cm_mmc=google-_-EC+-+Starbucks+Exact+-+Desktop_Tablet-_-Brand+-+Starbucks+Exact+-+Desktop_Tablet-_-starbucks_mkwid%7CscidpnuTt_dc%7Cpcrid%7C66399672506%7Cpkw%7Cstarbucks%7Cpmt%7Ce',
  			});
cafeList.push({
            	cafeName: 'Steeltown',
  				cafeCity: 'Worldwide',
  				cafeURL: 'http://steeltowncoffee.com/',
  			});


db.Cafe.remove({}, function(err, cafes){

  db.Cafe.create(cafeList, function(err, cafes){
    if (err) { return console.log('ERROR', err); }
    console.log("all cafes:", cafes);
    console.log("created", cafes.length, "cafe list");
    process.exit();

		});
	});

});