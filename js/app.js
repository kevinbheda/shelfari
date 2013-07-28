var app=app|| {};
app.views= {};
app.routers={};
app.models={};
app.collections={};

function validateForm(){
    	var book ={
    		'book_name': $("#addbook_book_name").val(),
    		'author': $("#addbook_author_name").val(),
    		'status': $(".addbook_status").val(),
		};

		if(!book.book_name || !book.author || status==4)
			return false;
		return book; // if all the conditions satisfied return book instead of true
	} 

function clearFormFields(){
	$("#addbook_book_name").val("");
	$("#addbook_author_name").val("");
	$(".addbook_status").val("4");
}	

					
$(document).on("ready", function () {
	app.appRouter = new app.routers.AppRouter();
	$(function() {
		Backbone.history.start({});   
	});
});

