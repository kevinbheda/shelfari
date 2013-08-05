/*jslint nomen: true */
/*global $,Backbone,_,validateForm,alert,BookListItemView */
/*$(function () {
    "use strict";
*/
var app = app || {};

app.views.SearchBookView = Backbone.View.extend({

    initialize: function () {
        app.searchBookResults = new app.collections.BookItemCollection();
        app.searchBookResultsView = new app.views.BookListView({model: app.searchBookResults}); //model in place collection
        console.log("SearchBookView initialized");
    },

    render: function () {
        var template = _.template($("#searchbook_template").html());
        this.$el.html(template);
        app.searchBookResults.reset();
        this.$el.append(app.searchBookResultsView.render().el);
        this.delegateEvents({
            "click  #booksearch_submit"  : "searchBook",
            "keypress #searchBook_book_name" : "onkeypress"
        });
        return this;
    },

    searchBook : function () {
        var bookname = this.$("#searchBook_book_name").val();
        app.searchBookResults.reset();
        if (!bookname) {
            alert("please enter the book name");
        } else {
            $.ajax({
                url: "codeigniter/index.php/bookapp/search/",
                type: "POST",
                dataType: "json",
                data: {
                    book_name: bookname
                }
            })
                .done(function (data) {
                    var result = app.searchBookResults.add(data);
                    if (!result.length) {
                        alert("No books found");
                    }
                })
                .fail(function (data) {
                    alert("error");
                });
        }
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) {
            event.preventDefault(); // to prevent default submission action when enter key is pressed
        }
    }
});
//});
