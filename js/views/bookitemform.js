var app=app || {};

var BookItemForm=Backbone.View.extend({


	
	initialize: function  () {
		
		console.log("new BookItemForm initialized");
	},

	render :function(){
		var template = _.template( $("#addbook_template").html(), {model:{}} );
	   // Load the compiled HTML into the Backbone "el"
	   
	   this.$el.html( template ); 

	   console.log("from render");
	   this.delegateEvents({
	   	'click .btn' :'save'
	   });
	   return this;
	},


	//save function
	save:function(e){
		e.preventDefault();
		e.stopPropagation();
		//alert("from book save");
		var book ={
			'bookname': this.$("#addbook_book_name").val(),
			'author':this.$("#addbook_author_name").val(),
			'status': this.$(".addbook_status").val()
		}
		console.log(book);
		if((!book.bookname) || (!book.author) || book.status=='Choose Read status'){
			alert("Please fill in the details");
		}
		else{


			this.setModelData();
			console.log(this.model.getbookurl());
			console.log(this.model.get('book_name'));

			this.model.save(this.model.attributes,
			{
				success:function(result)
				{
					if(result.id !='0')
					{
						alert("Book updated successfully!!");
					}
					else {
						alert("Book already exists");
					}

				},
				error :function()
				{
					alert("failed to save");
				}
			}
			);
		}// end of else
		//this.$("#addbook_reset").trigger('click');
		document.getElementById("add_book").reset();
	},
	//end of save function



	setModelData :function(){
		
		this.model.set({
			book_name: this.$("#addbook_book_name").val(),
			author:this.$("#addbook_author_name").val(),
			status:this.$(".addbook_status").val(),
			id : null
			//url:"shelfari/codeigniter/index.php/bookapp/add/"
		});
	},
	

});


