var app=app || {}
var SearchBookView = Backbone.View.extend({

	initialize: function(){ 
		app.collections.searchBookResults=new BookItemCollection();
		app.views.searchBookResultsView=new BookListView({model:app.collections.searchBookResults});
	},

	render: function(){

		var template = _.template( $("#searchbook_template").html());

		this.$el.html( template ); 
		app.collections.searchBookResults.reset();
		this.$el.append(app.views.searchBookResultsView.render().el);
		this.delegateEvents({
			"click  #booksearch_submit"	 : "searchBook",
			"keypress #searchBook_book_name" : "onkeypress"	
		});
		return this;
	},

	searchBook : function(){
		
		var bookname=this.$("#searchBook_book_name").val();
		app.collections.searchBookResults.reset();	
		
		var bookname=this.$("#searchBook_book_name").val();
		if(!bookname)
		{
			alert("please enter the book name");
		}
		else{
			$.ajax({
				url:"codeigniter/index.php/bookapp/search/",
				type :'POST',


				dataType:"json",
				data :
				{
					book_name:bookname
				}
			}
			)
			.done(
				function(data)
				{

					app.collections.searchBookResults.add(data);	
				})
			.fail(
				function(data){
					alert("error");
				}
				);

		}	


		

	},
	onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
        	event.preventDefault();
        }
    }



});