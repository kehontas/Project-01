$(document).ready(function() {
  console.log('app.js loaded!');
   $.get('/api/beans').success(function (beans){
  	beans.forEach(function(bean) {
	  	});
	});

//http://localhost:3000/beans/5671ffc9c0bd34b3225d1edb   
//http://localhost:3000/beans/api/beansbeans 
//http://localhost:3000/api/beansbeans 
	$.ajax({
  		method: "GET",
		url: "/api/beans",
  		success: function (data) { 	
  		console.log("this is my data:", data);	
  			data.forEach(function(e){
  		// TODO1: append a Delete and Update button to each listing with the data-id the id of the bean entry
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


//TODO2: create a button listener for Update here
// create a form that is prepopulated with the location data to allow user to update
// create a save and cancel button on this form so if they screwed up, no harm no foul
// then create an ajax request for update (PUT on server.js)


	$('#cafeList').on('click', '#updateButton', function (event) {
		event.preventDefault();
		var url = window.location.href.split('/');
		var beanId = url[url.length-1];
		var cafeId = $(this).closest('.cafe').data('id');
		var newCafe = $('#newCafe').serialize();
		console.log(newCafe);
		$.ajax({
			method:"PUT",
			url: "/api/beans/" + beanId + '/cafe/' + cafeId,
			data: newCafe,
			success: function(data){
				console.log(data);
			}
		});
			location.reload();
	});

//TODO3: create a button listener for Delete here
// insert delete ajax requuest
// then finally 'reroll' the list so the deleted location is gone.

	$('#cafeList').on('click', '#deleteButton', function (event) {
		// event.preventDefault();
		var url = window.location.href.split('/');
		var beanId = url[url.length-1];
		var deleteBtnID = $(this).data('id'); 
		console.log(deleteBtnID); 
		$.ajax({
		  	method: "DELETE",
			url: "/api/beans/" + beanId + "/cafe/" + deleteBtnID,
		  	success: function (data) { 	
			  	console.log("this is my data:", data);
			  	$("[data-id=" + deleteBtnID + "]").remove();
			}
		});
	});


/* END DOCUMENT READY */
});