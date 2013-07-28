var app=app || {}; 
app.views.BookListItemView=Backbone.View.extend({
	
	tagName:"li",
	
	render: function(){
		var template=_.template($("#bookitem_template").html(),this.model.attributes);
		this.$el.html( template ); 
		return this;
	}
});

app.views.BookListView =Backbone.View.extend({
	
	tagName:"ul",
	
	className:"booklist",

	initialize: function(){
		var that=this;
		console.log("book BookListView initialize");
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
Uncaught ReferenceError: BookListItemView is not defined
		}, this);
		return this;
	}
});