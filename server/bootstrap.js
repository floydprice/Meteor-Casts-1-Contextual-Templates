Meteor.startup(() => {
  if (People.find().count() === 0){
    _.times(25, () => {
      let fake_person = {
        name: faker.name.findName(),
        position: faker.name.jobTitle(),
        age: Math.floor(Math.random() * (56 - 28 ) + 28),
        phone_number: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
        last_contact: faker.date.past(),
        status: (Math.floor(Math.random() * 2 - 1) + 1) === 1 ? 'Prospect':'Customer',
        avatar: faker.internet.avatar()
      }
      console.log(`Inserting a fake person : ${fake_person.name} : ${fake_person.avatar}`)
      People.insert(fake_person)
    })

  }
})