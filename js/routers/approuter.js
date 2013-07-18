var AppRouter = Backbone.Router.extend({
	routes: {
		"": "addbook",
		"menu-item/addbook": "addbook",
		"menu-item/searchbook": "searchbook"
	},

	

	searchbook: function () {
		app.views.search= new SearchBookView();
		var myview=app.views.search.render().el;
		//console.log(myview);
		$('#app').html(myview);
		
	},

	addbook: function () {
		console.log("addbook called");
		app.views.addbook=new BookItemForm({model:new BookItem()});
		
		var myview=app.views.addbook.render().el;
		
		$('#app').html(myview);
	
	}
});
