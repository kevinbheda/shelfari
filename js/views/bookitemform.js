var app=app || {};

var BookItemForm=Backbone.View.extend({

	initialize: function  () {

		console.log("new BookItemForm initialized");
	},

	render :function(){
		
		var template = _.template( $("#addbook_template").html(), this.model.attributes );

		this.$el.html( template ); 
		this.$(".heading").html("Add Book");

		this.delegateEvents({
			'click .btn' :'save'
		});
		return this;
	},


	//save function
	save:function(e){
		e.preventDefault();
		e.stopPropagation();
		
		var book ={
			'book_name': this.$("#addbook_book_name").val(),
			'author':this.$("#addbook_author_name").val(),
			'status': this.$(".addbook_status").val()
		}
		
		if((!book.book_name) || (!book.author) || book.status=='Choose Read status'){
			alert("Please fill in the details");
		}
		else{
			
			this.setModelData();


			this.model.save(this.model.attributes,
			{
				success:function(model,response)
				{	
					var result=response;

					if(!isNaN(response.id))     // if id exists
					{
						if(result.id!='0')
						{
							alert("Book updated with id"+result.id );
						}
						else {
							alert("Book already exists");
						}
						app.routers.AppRouter.navigate("#",{trigger: true, replace: true});
					}
					else{
						alert("Failed to save");
						app.routers.AppRouter.navigate("#",{trigger: true, replace: true});
					}

				},
				error :function()
				{
					alert("Failed to save");

				}
			}
			);
		}
		

		
		

	},
	//end of save function

	setModelData :function(){

		
		this.model.set({
			book_name: this.$("#addbook_book_name").val(),
			author:this.$("#addbook_author_name").val(),
			status:this.$(".addbook_status").val(),
			id:null
			
		});
	},
	

});


