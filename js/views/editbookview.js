var app =app || {};
var EditBookView=Backbone.View.extend({

	initialize:function(){

		
	},
	
	render :function  () {
		// body...
		var template = _.template( $("#addbook_template").html(),this.model.attributes );
		this.$el.html(template);
		this.$(".heading").html("Edit Book");
		this.delegateEvents({
			'click .btn':'save'
		});

		return this;
	},
	save:function(e){
		e.preventDefault();
		//e.stopPropogation();
		var book ={
			'bookname': this.$("#addbook_book_name").val(),
			'author':this.$("#addbook_author_name").val(),
			'status': this.$(".addbook_status").val()
		}

		if((!book.bookname) || (!book.author) || book.status=='Choose Read status'){
			alert("Please fill in the details");
		}
		else {

			this.model.set(book);
			console.log(this.model.changedAttributes(book));
			this.model.save(this.model.attributes,{
				success:function(model,response)
				{
					console.log(response);
					if(response.result)
					alert("Book updated successfully");
					app.routers.AppRouter.navigate("#",{trigger: true, replace: true});
				},
				error:function(model,response)
				{
					alert("failed to save");
				}

				});
		}
	}

});
