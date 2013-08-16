App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('posts');
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
  }
});

var attr = DS.attr;

App.Post = DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  intro: attr('string'),
  extended: attr('string'),
});

App.Post.FIXTURES = [
  {id: 1, title: 'zomg', author: 'ebryn', intro: 'zomg', extended: 'ZOMG ZOMG ZOMG ZOMG'},
  {id: 2, title: 'wat!', author: 'wycats', intro: 'wat!', extended: 'some text .'},
  {id: 3, title: 'post_zomg', author: 'tomdale', intro: 'ember FTW!', extended: 'lorem ipsum .. '}
];
