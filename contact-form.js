Schema = Schema || {};
Schema.contactForm = new SimpleSchema({
  name: {
    type: String,
    label: 'Your name',
    max: 64
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Your e-mail"
  },
  message: {
    type: String,
    label: "Message",
    max: 1024
  }
});
