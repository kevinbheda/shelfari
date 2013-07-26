var app=app || {};
app.routers.AppRouter = Backbone.Router.extend({
	
	routes: {
		"": "welcome",
		"menu-item/addbook": "addbook",
		"menu-item/searchbook": "searchbook",
		"edit/:id": "editbook"
	},
	
	welcome: function(){
		$('#app').html("<p>Navigate to Add book tab to add a new book</p><br><p>And Search tab to search for a book by name and update or delete the book info</p>");
	},
	
	searchbook: function (){
		if(!app.searchView)
			app.searchView= new app.views.SearchBookView();
		var myview=app.searchView.render().el;
		$('#app').html(myview);
	},
	
	addbook: function (){
		if(!app.addBookView)
			app.addBookView=new app.views.BookItemForm({model:new app.models.BookItem()});
		var myview=app.addBookView.render().el;
		$('#app').html(myview);
	},
	
	editbook: function(id){	
		if (id  && app.searchBookResults.get(id)){
			app.editBookView=new app.views.EditBookView({
				model:app.searchBookResults.get(id)
			});
			var myview=app.editBookView.render().el;
			$('#app').html(myview);
		}
		else{
			
		}
	}
});
