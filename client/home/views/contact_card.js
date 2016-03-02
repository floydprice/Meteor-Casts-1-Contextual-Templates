Template.contact_card.helpers({
  dummyClass(){
    if (Template.instance().data.isDummy){
      return 'dummy'
    }
  }
})