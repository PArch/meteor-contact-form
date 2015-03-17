Template.contactForm.helpers({
  contactFormSchema: function() {
    return Schema.contactForm;
  }
});

AutoForm.hooks({
  contactForm: {
    after: {
      sendEmail: function(error, result, template) {
        status = $('.contactForm__status')

        if (error) {
          console.log(error);
          status.html("Error – please try again.");
        } else {
          status.text("Success! We'll be in touch.");
        }
      }
    }
  }
});
