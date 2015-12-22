//idk what this is. backbone shit?
var app = app || {};
var active = active || {};

//collection and model shit


app.Model = Backbone.Model.extend({
  initialize: function(){
    console.log('a model was generated');
  }
});

//mongo DB
Backbone.Model.idAttribute = "_id";

app.Collection = Backbone.Collection.extend({
  //get data from the api
  model: app.Model, //specify a model type
  url: '/cocktails',
  initialize: function(){
    var self = this;
    console.log('collection is on the loose');
    this.on('change', function(){
        console.log('our collection changed');
        var view = new app.CollectionView({
          collection: self
        });
        //we want a new view
    });
    this.on('sync', function(){
        console.log('our collection is synced');
        var view = new app.CollectionView({
          collection: self
        });
    });
    this.fetch();
  }
});


app.CollectionView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function(){
    console.log('collection view is a go');
    this.render();
  },
  render: function(){
    console.log('collection view is rendered');
    var models = this.collection.models;
    console.log('the models are' + models);
     //our collection view will be bound to a collection model
    for (var m in models){
      new app.ModelView({
        model: models[m],
        el: this.el
      })
    }
  }
});

app.ModelView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function(){
    console.log('modelview instantiated');
    this.render(); //immediately call render
  },
  render: function(){
    console.log('rendered');
    var data = this.model.attributes;
    console.log('grabbing the template');
    var template = $('#recipe-template').html();
    var compileTpl = _.template(template);
    console.log('creating html from template and model');
    var html = compileTpl(data);
    console.log(html);
    this.$el.append(html);
  }
});


$('document').ready(function(){
  console.log('doc is ready');
  active.collection = new app.Collection
});
