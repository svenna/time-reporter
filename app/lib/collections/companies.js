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
      return false;
    },

    remove: function(userId, doc) {
      return true;
    }
  });
}


AddressSchema = new SimpleSchema({
  alternateName: {
    type: String,
    max: 100,
    optional: true
  },
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    optional: true
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  },
  country: {
    type: String,
    label: "Country"
  }
});

CompanySchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  companyAddress: {
    type: [AddressSchema],
    minCount: 1
  },
  invoiceEmail: {
    type: [String],
    label: "Invoice Email",
    minCount: 1
  },
  Addressee: {
    type: String,
    label: "Addressee"
  },
  lime_link: {
    type: String,
    label: "Lime Link",
    optional: true,
    regEx: SimpleSchema.RegEx.Url
  }
});

Companies.attachSchema(CompanySchema);
