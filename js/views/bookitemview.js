var app=app || {};
var BookListItemView=Backbone.View.extend({
	tagName:"li",
	initialize: function(){
		//this.model=new BookItem({id:'3',book_name:"hello wassup"});
		//this.render();
	},

	render :function(){

		
		var template=_.template($("#bookitem_template").html(),this.model.attributes);
		this.$el.html( template ); 


		//	document.append(this.el.html());
		return this;
	},

	events: {
		"click .delete": "deleteBook",
		"click  .edit" :  "editBook"
	},

	deleteBook:function(){
		var that=this;
		this.model.destroy({ wait:true,
			success:function(model,response,options){

				console.log("response="+JSON.stringify(response));
				console.log("options="+JSON.stringify(options));
				that.remove();
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
		/*app.views.editbookview=new EditBookView({model:that.model});
		console.log("from edit book item"+that.model.get("id"));
		var myview=app.views.editbookview.render().el;
		//console.log(myview);
		
		$('#app').html(myview);
		
*/

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