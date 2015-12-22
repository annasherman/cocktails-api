//two namespaces

var app = app || {}; //blueprints go here
var active = active || {}; //this is where instantiated objects go

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  initialize: function(){
    console.log('a collection of cocktails is on the loose');
  },
  url: '/cocktails'
});

Backbone.Model.idAttribute = "_id";

app.CollectionView = Backbone.View.extend();

app.Model = Backbone.Model.extend({
  initialize: function() {
    console.log('a model was generated! miracle!');
  }
});

app.ModelView = Backbone.View.extend({
  initialize: function(){
    console.log('a model view was dynamically generated');
    this.render();
  },
  render: function(){
    var data = this.model.attributes;
    var template = $('#recipe-template').html(); //grabbinginterior content
    //underscore will transform this into a method
    //which will accept data as an arguemnt and render it.
    var compileTemplate = _.template(template);
    var html = compileTemplate(data);
    console.log(html);
  }
});


$(document).ready(function(){
  console.log('cocktails!!!');


});
