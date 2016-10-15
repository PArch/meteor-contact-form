Meteor.startup(function () {
    reCAPTCHA.config({
        theme: 'light',  // 'light' default or 'dark'
        publickey: Meteor.settings.public.recaptcha.publickey
    });
});

Template.contactForm.helpers({
    recaptchaKeyPreset: function()
    {
       return typeof Meteor.settings.public.recaptcha !== "undefined";
    },
    contactFormSchema: function () {
        var customSchema = this.schema;
        if (customSchema) {
            return customSchema;
        }
        return Schema.contactForm;
    }
});

AutoForm.hooks({
    contactForm: {
        before: {
            method: function (doc) {
                doc.captcha = $('#g-recaptcha-response').val();
                return doc;
            }
        },
        after: {
            method: function (error, result, template) {
                status = $('.contactForm-status')

                if (error) {
                    var errorMessage = "Error - Please try again";
                    if (error.reason == "Invalid Captcha") {
                        errorMessage = error.reason;
                    }
                    console.log(error);
                    status.removeClass("success");
                    status.addClass("error");

                    status.text(errorMessage);
                } else {
                    status.removeClass("error");
                    status.addClass("success");
                    status.text("Success! We'll be in touch.");
                }
            }
        }
    }
});
