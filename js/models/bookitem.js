var app=app || {};
app.models.BookItem = Backbone.Model.extend({

urlRoot:'/shelfari/codeigniter/index.php/bookapp/index/',

defaults:{
	id: null,
	author: "",
	status:"",
	book_name: ""
},

url: function(){
	return '/shelfari/codeigniter/index.php/bookapp/index/';
},

toJSON:function(){
	return{
		"book_name":this.get('book_name'),
		"author":this.get('author'),
		"status":this.get('status')
	};   
}
});

app.collections.BookItemCollection =Backbone.Collection.extend({

model:app.models.BookItem,

url:"/shelfari/codeigniter/index.php/bookapp/index/"
});
