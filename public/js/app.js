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
		$("#beans").append("<h4>" + "<a href='/beans/"+ e._id + "'>" + e.beanName + "</a>" + "<hr>" );
  			
  			});	
		}
		});
 	});
});
