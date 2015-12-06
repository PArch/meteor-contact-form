if (typeof Schema === 'undefined')
    Schema = {}
Schema.contactForm = new SimpleSchema({
    name: {
        type: String,
        autoform: {
            type: "text"
        },
        label: 'Your name',
        max: 64
    },
    subject: {
        type: String,
        label: "Subject",
        max: 256
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Your e-mail",
        autoform: {
            type: "text"
        }
    },
    message: {
        type: String,
        autoform: {
            type: "textarea"
        },
        label: "Message",
        max: 1024
    },
    captcha: {
        type: String,
        autoform: {
            type: "hidden"
        },
        defaultValue:""

    }
});

