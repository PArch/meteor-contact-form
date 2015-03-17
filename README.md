# Simple contact form for Meteor applications

Add a simple mailable contact form to your Web application. This is modified from Ruslan Bredikhin's [contact form](https://github.com/bredikhin/meteor-contact-form).

Changes:
- Added custom subject
- Removed Subject form fields

## Installation

`meteor add scalloped:contact-form`

## Usage

Configure on the server:

```javascript
Meteor.settings.contactForm = {
  emailTo: 'someone@somewhere.com',
  emailSubject: function (params) {
    'Message from ' + params.name + ' via contact form'
  }
};
...
```

Display on the client:

```html
{{>contactForm}}
...
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Emily Chen
