/*****************************************************************************/
/* Companies: Event Handlers */
/*****************************************************************************/
Template.Companies.events({
  'click .reactive-table tbody tr': function(event) {
    var company = this;
    Session.set('company', company);
  }
});

/*****************************************************************************/
/* Companies: Helpers */
/*****************************************************************************/
Template.Companies.helpers({
  companies: function() {
    return Companies.find({});
  },
  companiesCollction: function() {
    return Companies;
  },
  companiesTableSettings: function() {
    return {
      collection: Companies,
      rowsPerPage: 10,
      showFilter: true,
      fields: [{
        key: 'name',
        label: 'Company name'
      }]
    };
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
