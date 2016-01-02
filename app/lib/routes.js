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
  this.route('home');
  this.route('/', function() {
    this.redirect('/home');
  })
});

// this.route('articles', {
//   data: function() {
//       console.log("looking for articles...");
//       return Articles.find()
//     } //set template data context
// });
// this.route('article', {
//   path: '/article/:_id',
//   data: function() {
//     return Articles.findOne({
//       _id: this.params._id
//     })
//   },
//   template: 'fullArticle'
// });
// });

Router.route('companies', {
  name: 'companies',
  controller: 'CompaniesController',
  where: 'client'
});


Router.route('adminstration', {
  name: 'adminstration',
  controller: 'AdminstrationController',
  where: 'client'
});

Router.route('reports', {
  name: 'reports',
  controller: 'ReportsController',
  where: 'client'
});


Router.route('home/expenses', {
  name: 'Expenses',
  controller: 'ExpensesController',
  where: 'client'
});

Router.route('home/allowance', {
  name: 'Allowance',
  controller: 'AllowanceController',
  where: 'client'
});
