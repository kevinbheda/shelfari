var app=app || {};
app.views.EditBookView=Backbone.View.extend({ 
	//almost smiliar to bookitemform view	
	initialize: function(){
		console.log("EditBookView initialized");
	},
	
	render: function(){
		var template = _.template( $("#addbook_template").html(),this.model.attributes );
		this.$el.html(template);
		this.$(".heading").html("Edit Book");
		this.$(".addbook_status").val(this.model.get("status"));
		this.delegateEvents({
			'click #addbook_button': 'save',
			'click #deletebook_button': 'delete'
		});
		return this;
	},

	save: function(e){
		e.preventDefault();
		e.stopPropagation(); // prevent default form submission action
		var book =validateForm();

		if(!book)
			alert("Please fill in the details"); 
		else {   
			var attr=this.model.changedAttributes(book);   //get attributes which user has edited 

			if(!attr){   //if user has not edited anyfields
				alert("Update something to save");	
			}
			else {
				this.model.set(book);
				var url=this.model.url()+this.model.get("id");
				this.model.save(attr,{"url": url,
					patch: true,  //send patch request to update only changed attributes
					success: function(model,response){
						if(response.result)
							alert("Book updated successfully");

						app.appRouter.navigate("#",{trigger: true, replace: true}); 
					},
					error: function(model,response){
						alert("failed to save");
						app.appRouter.navigate("#",{trigger: true, replace: true}); //triger router event and not stored in history
					}
				}); 
			}
		}
	},

	delete: function(){
		var book=validateForm();

		if(!book){
			alert("Some fields not set");
		}
		else{
			var attr=this.model.changedAttributes(book);

			if(attr &&
				confirm("You have made some changes,would you still like to delete it?")
			)// asks for confirmation for delete after changes 
				this.deletebook();
			else if(!attr) // direct delete
				this.deletebook();
			
		}
	},

	//non-event func
	deletebook: function(){
		var url=this.model.url()+this.model.get("id");
		this.model.destroy({ wait:true,"url":url,
			success: function(model,response,options){

				if(response.result){
					alert("Book deleted successfully");
					app.appRouter.navigate("#",{trigger: true, replace: true});
				}
				else 
					alert("Failed to delete");
			}, 
			error: function(model,response,options){
				alert("Failed to save");
			}
		});

	}
});
