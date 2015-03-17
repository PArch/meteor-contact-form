Package.describe({
  name: 'scalloped:contact-form',
  summary: 'A simple contact form [experimental fork]',
  version: '1.0.0',
  git: 'https://github.com/tenshiemi/meteor-contact-form'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('email', 'server');
  api.use('templating', 'client');
  api.use('aldeed:autoform@4.1.0');
  api.addFiles('contact-form.js');
  api.addFiles([
    'client/views/contact-form.html',
    'client/views/contact-form.js',
    ], 'client');
  api.addFiles('server/contact-form.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aldeed:autoform@4.1.0');
  api.addFiles('contact-form.js');
  api.addFiles([
    'client/views/contact-form.html',
    'client/views/contact-form.js',
    ], 'client');
    api.addFiles('server/contact-form.js', 'server');
  api.addFiles('contact-form.js');
  api.addFiles('contact-form-tests.js');
});
