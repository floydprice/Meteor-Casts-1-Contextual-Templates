Template.home.onCreated(function() {
  this.subscribe("people")
})

Template.home.helpers({
  people() {
    return People.find()
  }
})

