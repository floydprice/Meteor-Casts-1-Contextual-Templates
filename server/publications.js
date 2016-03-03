Meteor.publish("people", () => {
  //Meteor._sleepForMs(1500);
  return People.find()
})