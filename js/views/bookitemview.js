var app=app || {}; 
app.views.BookListItemView=Backbone.View.extend({
	
	tagName:"li",
	
	render: function(){
		var template=_.template($("#bookitem_template").html(),this.model.attributes);
		this.$el.html( template ); 
		this.delegateEvents({
			"click .delete": "deleteBook",
			"click  .edit" :  "editBook"
		});
		return this;
	},

	deleteBook: function(){
		var that=this;                             
		this.model.destroy({ wait:true,
			success:function(model,response,options){
			
				if(response.result)
					that.remove();
				else 
					alert("Failed to delete");
			}, 

			error:function(model,response,options){
				alert("failed to save");
			}
		});
		
	},
	
	editBook:function(){
		var that=this;
		app.appRouter.navigate("#edit/"+that.model.get("id"),{trigger: true, replace: true});
	}

});

app.views.BookListView =Backbone.View.extend({
	
	tagName:"ul",
	
	className:"booklist",

	initialize: function(){
		var that=this;
		this.model.on("reset", this.render, this);
		this.model.on("add", function (bookitem) {
			that.$el.append(new app.views.BookListItemView({model:bookitem}).render().el);
		});
	},

	render: function (){
		console.log("BookListView render called");
		this.$el.empty();   // empty previous results view
		_.each(this.model.models, function (bookitem){
			this.$el.append(new BookListItemView({model:bookitem}).render().el);
		}, this);
		return this;
	}
});