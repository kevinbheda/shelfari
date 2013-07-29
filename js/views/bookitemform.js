var app =app || {};
app.views.BookItemForm=Backbone.View.extend({

initialize: function(){
	console.log("new BookItemForm initialized");
},

render: function(){
	var template = _.template( $("#addbook_template").html(),this.model.attributes);
	this.$el.html( template ); 
	this.$(".heading").html("Add Book");
	this.$("#deletebook_button").remove();
	this.delegateEvents({
		'click #addbook_button': 'save'
	});
	return this;
},

save: function(e){
	e.preventDefault();
	e.stopPropagation(); // to prevent default form submission action
	var book=validateForm(); 
	
	if(!book)
		alert("Please fill in the details"); //form validation code
	else
		this.addbook(book);
},

//non-event func
addbook: function(book){
	this.model.set(book);
	this.model.set({id:null}); //for post request
	this.model.save(this.model.attributes,{  
		success: function(model,response){	

			if(!isNaN(response.id)){
				if(response.id!='0')
					alert("Book updated with id"+response.id );
					else
					alert("Book already exists");
				clearFormFields();
			}
			else
			    alert("Failed to save");
		},
		error: function(){
		    alert("Failed to save");
			}
	});
}});


