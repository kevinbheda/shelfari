var app =app||{};
var BookItem = Backbone.Model.extend({
	urlRoot:'/shelfari/codeigniter/index.php/bookapp/index',
	getbookurl:function(){
		return status;
	},

	defaults: {
		id:"",
		author: "",
		status:"",
		book_name: ''
	},
	toJSON:function()
	{
		return 	{
			"book_name":this.get('book_name'),
			"author":this.get('author'),
			"status":this.get('status')
		};
		}

	
});


var BookItemCollection =Backbone.Collection.extend({

	model:BookItem,
	url:"/shelfari/codeigniter/index.php/bookapp/search"

});

