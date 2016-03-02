Meteor.publish("people", () => {
  Meteor._sleepForMs(3000);
  return People.find()
})