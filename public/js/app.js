$(document).ready(function() {
  console.log('app.js loaded!');
   $.get('/api/beans').success(function (beans){
  	beans.forEach(function(bean) {
  		renderBean(bean);
  	});

  function renderBean(bean) {
  console.log('rendering bean:', bean);
}
$.ajax({
  	method: "GET",
	url: "api/beans",
  	success: function (data) { 	
  	console.log("this is my data:", data);	
  	data.forEach(function(e){
		$("#beans").append("<h4>" + e.beanName + "</h4>" + "<p>" + "Origin: " + e.beanOrigin + "</br>" + "Roast: " +
			e.beanRoast + "<br>" + "Body: " + e.beanBody + "<br>" + "Acidity: " + e.beanAcidity + "<br>" + "Flavor: " + e.beanFlavor + "<br>" + "Peets, The Hive Place to Bee, Four Barrels" + "</p>" + "<hr>");
  			});	
		}
		});
 	});
});
