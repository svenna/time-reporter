Companies = new Mongo.Collection('companies');


if (Meteor.isServer) {
  Companies.allow({
    insert: function(userId, doc) {
      return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function(userId, doc) {
      return false;
    }
  });

  Companies.deny({
    insert: function(userId, doc) {
      return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function(userId, doc) {
      return true;
    }
  });
}

AddressSchema = SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  carryoff: {
    type: String,
    label: "C/O"
  },
  addr1: {
    type: String,
    label: "Address 1"
  },
  addr2: {
    type: String,
    label: "Address 2"
  },
  postcode: {
    type: Number,
    label: "Post Code"
  },
  city: {
    type: String,
    label: "City"
  },
  country: {
    type: String,
    label: "Country"
  }
});

CompanySchema = new SimpleSchema({
  companyAddress: {
    type: [AddressSchema]
  },
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  carryoff: {
    type: String,
    label: "C/O"
  },
  addr1: {
    type: String,
    label: "Address 1"
  },
  addr2: {
    type: String,
    label: "Address 2"
  },
  postcode: {
    type: Number,
    label: "Post Code"
  },
  city: {
    type: String,
    label: "City"
  },
  country: {
    type: String,
    label: "Country"
  },
  lime_link: {
    type: String,
    label: "Lime Link",
    optional: true,
    regEx: SimpleSchema.RegEx.Url
  },
  invoiceEmail: {
    type: String,
    label: "Invoice Email"
  }
});

Companies.attachSchema(CompanySchema);
