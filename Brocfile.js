/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/moment/moment.js');
app.import('bower_components/pace/pace.js');
app.import('bower_components/pace/themes/blue/pace-theme-flash.css');
app.import('bower_components/notify.js/notify.js');
app.import('bower_components/foundation/js/foundation.js');
app.import('bower_components/foundation/js/foundation/foundation.dropdown.js');
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {
  destDir: 'assets/fonts'
});

module.exports = app.toTree();
