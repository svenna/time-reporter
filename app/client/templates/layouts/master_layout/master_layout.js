Template.MasterLayout.helpers({});


Template.MasterLayout.events({});


Template.navItems.helpers({
  activeIfTemplateIs: function(template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});
