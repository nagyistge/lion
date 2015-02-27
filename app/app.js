import Ember from 'ember';
import Resolver from 'ember/resolver';
import config from './config/environment';
import loadInitializers from 'ember/load-initializers';
import formattedDate from './helpers/formatted-date';

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.null = null;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,

  ready: function() {
    if (Notify.isSupported && Notify.needsPermission) {
      Notify.requestPermission();
    }
  }
});

Raven.config('https://552d73bcf3804b9a8dd7748984e70235@app.getsentry.com/23433', {
  whitelistUrls: ['as-lion.herokuapp.com']
}).install();

Ember.Handlebars.registerBoundHelper('formattedDate', formattedDate);

loadInitializers(App, 'lion');

export default App;
