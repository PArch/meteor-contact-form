Meteor.startup(function () {
  if( typeof Meteor.settings.private.recaptcha !== "undefined")
  {
    console.log(Meteor.settings.private.recaptcha.secretKey);
    reCAPTCHA.config({
        privatekey: Meteor.settings.private.recaptcha.secretKey
    });
  }
});

Meteor.methods({
    sendEmail: function (data) {
        this.unblock();
        if( typeof Meteor.settings.private.recaptcha !== "undefined")
        {
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, data.captcha);

        if (verifyCaptchaResponse.data.success === false) {
            console.log("Failed");
            throw new Meteor.Error("500", "Invalid Captcha");
        }
      }
        var text = data.name + " - "
            + data.email + "\n\n\n"
            + data.message;


        var text = "Name: " + data.name + "\n\n"
            + "Email: " + data.email + "\n\n\n\n"
            + "Subject: " + data.subject + "\n\n"
            + data.message;

        this.unblock();

        Email.send({
            to: Meteor.settings.public.contactForm.emailTo,
            from: data.email,
            subject: "Message From " + data.name + " " + data.subject,
            text: text
        });
    }
});
