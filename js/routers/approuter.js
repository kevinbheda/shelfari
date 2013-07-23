var AppRouter = Backbone.Router.extend({
	routes: {
		"": "welcome",
		"menu-item/addbook": "addbook",
		"menu-item/searchbook": "searchbook",
		"edit/:id"	:"editbook"
	},

	
	welcome:function(){
		$('#app').html("<p>Navigate to Add book tab to add a new book</p><br><p>And</p><br><p> Search tab to search for a book by name and update or delete the book info</p>");
	},
	searchbook: function () {
		if(!app.views.searchView)
		app.views.searchView= new SearchBookView();
		
		var myview=app.views.searchView.render().el;
		//console.log(myview);
		$('#app').html(myview);
		
	},

	addbook: function () {
		console.log("addbook called");
		
		  if(!app.views.addbook)
			app.views.addbook=new BookItemForm({model:new BookItem()});
		
		var myview=app.views.addbook.render().el;
		
		$('#app').html(myview);
	
	},
	editbook:function(id)
	{

	}
});
