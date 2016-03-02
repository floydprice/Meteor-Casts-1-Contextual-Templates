FlowRouter.route("/", {
  name: "home",
  action() {
    BlazeLayout.render("main_layout", {
      content: 'home'
    })
  }
})

