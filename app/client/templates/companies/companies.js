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
  },
  selectedCompany: function() {
    var company = Session.get('company');
    if (company) {
      return Companies.findOne({
        name: company.name
      })
    } else {
      Companies.findOne();
    }
  },
  tableSettings: function() {
    return {
      currentPage: Template.instance().currentPage
    };
  }
});

/*****************************************************************************/
/* Companies: Lifecycle Hooks */
/*****************************************************************************/
Template.Companies.onCreated(function() {
  var currentPage = new ReactiveVar(Session.get('current-page') || 0);
  this.currentPage = currentPage;
  this.autorun(function() {
    Session.set('current-page', currentPage.get());
  });
});

Template.Companies.onRendered(function() {});

Template.Companies.onDestroyed(function() {});

Template.companyNavItems.helpers({
  activeIfTemplateIs: function(template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});
