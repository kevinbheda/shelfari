
var SearchBookView = Backbone.View.extend({

	

	events : {
		"click  #booksearch_submit"	 : "searchBook"

	},

	initialize: function(){ 
		this.searchBookResults=new BookItemCollection();

	},

	render: function(){
	  // Compile the template using underscore 
	  var template = _.template( $("#searchbook_template").html(), {} );
	   // Load the compiled HTML into the Backbone "el"
	   this.$el.html( template ); 
	   return this;
	} ,

	searchBook : function(){
		
		   var bookname=this.$("#searchBook_book_name").val();
		  var  xp=this.searchBookResults;

		   console.log(this.searchBookResults);
		   console.log()
		   $.ajax({
		   	 url:"codeigniter/index.php/bookapp/search/",
		   	type :'POST',
		   	

		   	dataType:"json",
		   	data :{book_name:this.$("#searchBook_book_name").val()}})
		   	.done(
		   		function(data)
		   		{console.log("hello world"+data);
		   		xp.add(data);	
		   		});


		   	if(xp.length !=0)
		   	{
		   		this.displaybooks(xp);
		   	}



	},

	displaybooks:function(books){
		

	}



});