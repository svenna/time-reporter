Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


// Router.route('/', {
//   name: 'home',
//   controller: 'HomeController',
//   where: 'client'
// });

Router.map(function() {
  this.route('about'); // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/', //overrides the default '/home'
  });
  this.route('articles', {
    data: function() {
        console.log("looking for articles...");
        return Articles.find()
      } //set template data context
  });
  this.route('article', {
    path: '/article/:_id',
    data: function() {
      return Articles.findOne({
        _id: this.params._id
      })
    },
    template: 'fullArticle'
  });
});
