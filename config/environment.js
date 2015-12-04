/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lion',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      providers: {
        'github-oauth2': {
          scope: 'user:email,read:org'
        }
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self'",
      'connect-src': "'self' localhost:3000 as-lion-api.herokuapp.com",
      'img-src': "'self' avatars.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiBaseUrl = 'http://localhost:3000';
    ENV.torii.providers['github-oauth2'].apiKey = 'c917120ff6a5a7f7de20';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiBaseUrl = 'https://as-lion-api.herokuapp.com';
    ENV.torii.providers['github-oauth2'].apiKey = '743d8bfa4937e587f1f4';
  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'session'
  };

  ENV['serverTokenEndpoint'] = ENV.apiBaseUrl + '/api/tokens';

  return ENV;
};
