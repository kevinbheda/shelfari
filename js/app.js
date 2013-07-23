var app=app || {};
app.views= {};
app.routers={};
app.modeles={};
app.collections={};




$(document).on("ready", function () {
	app.routers.AppRouter = new AppRouter();

	$(function() {
		Backbone.history.start({});
	});
});



