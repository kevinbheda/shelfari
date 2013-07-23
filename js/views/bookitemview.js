var app=app || {};
var BookListItemView=Backbone.View.extend({
	tagName:"li",
	initialize: function(){

	},

	render :function(){

		var template=_.template($("#bookitem_template").html(),this.model.attributes);
		this.$el.html( template ); 
		this.delegateEvents({
			"click .delete": "deleteBook",
			"click  .edit" :  "editBook"
		});
		return this;
	},


	deleteBook:function(){
		var that=this;                             
		                                         //wait: true wait for server response
		this.model.destroy({ wait:true,
			success:function(model,response,options){
			
				if(response.result)
					that.remove();
				else 
					alert("Failed to delete");
			}, 
			error:function(model,response,options)
			{
				alert("failed to save");
			}
		});
		
	},
	editBook:function(){
		var that=this;
		app.routers.AppRouter.navigate("#edit/"+that.model.get("id"),{trigger: true, replace: true});
	}

});

var BookListView =Backbone.View.extend({
	tagName:"ul",
	className:"booklist",

	initialize:function(){
		var self = this;
		this.model.on("reset", this.render, this);
		this.model.on("add", function (bookitem) {
			self.$el.append(new BookListItemView({model:bookitem}).render().el);
		});
	},
	render:function () {
		console.log("BookListView render called");
		this.$el.empty();
		_.each(this.model.models, function (bookitem) {
			this.$el.append(new BookListItemView({model:bookitem}).render().el);
		}, this);
		return this;
	}

});