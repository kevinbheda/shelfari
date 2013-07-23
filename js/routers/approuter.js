var AppRouter = Backbone.Router.extend({
	routes: {
		"": "welcome",
		"menu-item/addbook": "addbook",
		"menu-item/searchbook": "searchbook",
		"edit/:id"	:"editbook"
	},

	
	welcome:function(){
		$('#app').html("<p>Navigate to Add book tab to add a new book</p><br><p>And Search tab to search for a book by name and update or delete the book info</p>");
	},
	searchbook: function () {
		if(!app.views.searchView)
		app.views.searchView= new SearchBookView();
		
		var myview=app.views.searchView.render().el;
		
		$('#app').html(myview);
		
	},

	addbook: function () {
			
		  if(!app.views.addbook)
			app.views.addbook=new BookItemForm({model:new BookItem()});
		
		var myview=app.views.addbook.render().el;
		
		$('#app').html(myview);
	
	},
	editbook:function(id)
	{	

		if (id  && app.collections.searchBookResults.get(id))
		{
		app.views.editbookview=new EditBookView({
			model:app.collections.searchBookResults.get(id)
		});
		
		var myview=app.views.editbookview.render().el;

		
		$('#app').html(myview);
		}
		else{

		}
	}
});
