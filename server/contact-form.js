Meteor.methods({
  sendEmail: function(data) {
    check(data, Schema.contactForm);

    var text = data.name + " - "
    + data.email + "\n\n\n\n"
    + "\n\n" + data.message;

    this.unblock();

    Email.send({
      to: Meteor.settings.contactForm.emailTo,
      from: data.email,
      subject: Meteor.settings.contactForm.emailSubject(data),
      text: text
    });
  }
});
