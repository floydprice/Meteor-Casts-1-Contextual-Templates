Meteor.publish("people", () => {
  Meteor._sleepForMs(2000);
  return People.find()
})