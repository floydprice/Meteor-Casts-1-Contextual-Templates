Template.home.onCreated(function() {
  this.subscribe("people")
})

Template.home.helpers({
  people() {
    return People.find()
  },
  isReady() {
    return Template.instance().subscriptionsReady()
  },
  dummyPerson: {
    avatar: '/images/dummy-avatar.png'
  }
})

