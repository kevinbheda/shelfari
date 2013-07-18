var app =app||{};
var BookItem = Backbone.Model.extend({
	urlRoot:'/shelfari/codeigniter/index.php/bookapp/',
	getbookurl:function(){
		return status;
	},
	defaults: {
		id:"",
		author: "",
		status:"",
		book_name: ''
	}
});


var BookItemCollection =Backbone.Collection.extend({

		model:BookItem,
		url:"/shelfari/codeigniter/index.php/bookapp/search"

});

