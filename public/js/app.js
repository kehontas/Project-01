$(document).ready(function() {
  console.log('app.js loaded!');
   $.get('/api/beans').success(function (beans){
  	beans.forEach(function(bean) {
 
	  	});
	});

$.ajax({
  	method: "GET",
	url: "api/beans",
  	success: function (data) { 	
  	console.log("this is my data:", data);	
  	data.forEach(function(e){
		$(".beans").append("<h4><a href='/beans/"+ e._id + "'>" + e.beanName + "</a><hr>" );  			
  			});	
		}
	});

$('#newCafe').on('submit', function (event) {
	event.preventDefault();
	var url = window.location.href.split('/');
	var beanId = url[url.length-1];
	var newCafe = $('#newCafe').serialize();
	console.log(newCafe);
$.ajax({
	method:"POST",
	url: "/api/beans/" + beanId + '/cafe'  ,
	data: newCafe,
	success: function(data){
		console.log(data);
		}
	});
		location.reload();
	});
});