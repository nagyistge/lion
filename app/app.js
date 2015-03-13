import Ember from 'ember';
import Resolver from 'ember/resolver';
import config from './config/environment';
import loadInitializers from 'ember/load-initializers';

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

loadInitializers(App, 'lion');

export default App;
