# Simple contact form for Meteor applications

This is a contact form based on https://github.com/bredikhin/meteor-contact-form

The current implementation integrates with https://github.com/appshore/Meteor-reCAPTCHA/ that utilizes Google reCaptcha service.

Changes:
- Added appshore recaptcha
- Changed the status message to the top of the form.
- Changed the way emailTo needs to be specified.

## Installation

`meteor add branco:contact-form`

## Usage

All it takes is two simple steps:

###1. Sign up and get the public and secret key from Google reCaptcha service:
https://www.google.com/recaptcha/intro/index.html

###2. Configure on the server:
Setup your settings.json (at the root of your project)
```settings.json
{

  "public":
  {
    "contactForm":
    {
      "emailTo":"someone@abcd.com"
    },
    "recaptcha":
    {
      "publickey":"<public_key_from_google>"
    },
  },
  "private":
  {
    "recaptcha":
    {
      "secretKey":"<secret_key_from_google>"
    },
  }
}
...
```


Display on the client:

```html
{{>contactForm}}
...
```

## What is next?

- Custom Schema injection - Allows specification of a given schema to be used for the contact form
- i18n integration - Enabling  multi-lingual contact form.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Junio Branco
