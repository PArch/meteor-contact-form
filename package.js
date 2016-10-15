Package.describe({
  name: 'juniobranco:contact-form',
  summary: 'A contact form with reCaptcha implementation to prevent spam',
  version: '1.0.6',
  documentation:"README.md",
  git: 'https://github.com/branco91/meteor-contact-form'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('email', 'server');
  api.use('templating', 'client');
  api.use('aldeed:autoform@5.5.1');
  api.use('gildaspk:simpleschema-tapi18n-labels@0.0.2');
  api.use('appshore:recaptcha@2.0.6');
  api.addFiles('contact-form.js');
  api.addFiles([
    'client/views/contact-form.html',
    'client/views/contact-form.js',
    'client/views/contact-form.css'
    ], 'client');
  api.addFiles('server/contact-form.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aldeed:autoform@5.5.1');
  api.addFiles([
    'client/views/contact-form.html',
    'client/views/contact-form.js',
    'client/views/contact-form.css'
    ], 'client');
  api.use('templating', 'client');
  api.addFiles('server/contact-form.js', 'server');
  api.addFiles('contact-form.js');
  api.addFiles('contact-form-tests.js');
});
