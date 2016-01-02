/*****************************************************************************/
/* Companies: Event Handlers */
/*****************************************************************************/
Template.Companies.events({});

/*****************************************************************************/
/* Companies: Helpers */
/*****************************************************************************/
Template.Companies.helpers({
  companies: function() {
    return Companies.find({});
  }
});

/*****************************************************************************/
/* Companies: Lifecycle Hooks */
/*****************************************************************************/
Template.Companies.onCreated(function() {});

Template.Companies.onRendered(function() {});

Template.Companies.onDestroyed(function() {});

Template.companyNavItems.helpers({
  activeIfTemplateIs: function(template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});

CompaniesFilter = new FilterCollections(Companies. {});
