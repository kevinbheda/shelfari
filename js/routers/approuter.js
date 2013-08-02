/*global $,app,Backbone */
var app = app || {};
app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "": "welcome",
        "menu-item/addbook": "addbook",
        "menu-item/searchbook": "searchbook",
        "edit/:id": "editbook"
    },

    welcome: function () {
        if (!app.randomBooksView) {
            app.randomBooksView = new app.views.BookListView({ model: new app.collections.BookItemCollection() });
        }
        app.randomBooksView.model.reset();
        app.randomBooksView.model.fetch();
        $('#app').html(app.randomBooksView.render().el);
    },

    searchbook: function () {
        if (!app.searchView) {
            app.searchView = new app.views.SearchBookView();
        }
        var myview = app.searchView.render().el;
        $('#app').html(myview);
    },

    addbook: function () {
        if (!app.addBookView) {
            app.addBookView = new app.views.BookItemForm({model : new app.models.BookItem()});
        }
        var myview = app.addBookView.render().el;
        $('#app').html(myview);
    },

    editbook: function (id) {
        if (!isNaN(id) && id !== 0) {
            var book = new app.models.BookItem({"id": id});
            var url = book.url() + book.get("id");
            app.editBookView = new app.views.EditBookView({model : book});
            book.fetch({"url": url,
                success: function (model, response, options) {
                    var myview = app.editBookView.render().el;
                    $('#app').html(myview);
                }
                });
        }
    }
});