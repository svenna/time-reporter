/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
// Template.Home.events({
// });

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
// Template.Home.helpers({});
//
// /*****************************************************************************/
// /* Home: Lifecycle Hooks */
// /*****************************************************************************/
// Template.Home.onCreated(function() {});
//
// Template.Home.onRendered(function() {});
//
// Template.Home.onDestroyed(function() {});

Template.homeNavItems.helpers({
  activeIfTemplateIs: function(template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});
