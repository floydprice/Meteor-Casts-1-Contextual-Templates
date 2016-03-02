People = new Mongo.Collection("people")

Person = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 200
  },
  position: {
    type: String,
    label: 'Position',
    max: 1000
  },
  age: {
    type: String,
    label: 'Age'
  },
  phone_number: {
    type: String,
    label: 'Phone Number',
  },
  email: {
    type: String,
    label: 'E-mail',
    regEx: SimpleSchema.RegEx.Email
  },
  address: {
    type: String,
    label: 'Address',
    max: 2000
  },
  last_contact: {
    type: Date,
    label: 'Last Contact'
  },
  status: {
    type: String,
    label: 'Status'
  },
  avatar: {
    type: String,
    label: 'Avatar'
  }
})

People.attachSchema(Person)