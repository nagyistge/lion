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
      PUSHER_OPTS: { key: 'b97fe1ecbf31373c3699' }
    },

    torii: {
      providers: {
        'github-oauth2': {
          scope: 'user:email'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.API_HOST = 'http://localhost:3000'
    ENV.torii.providers['github-oauth2'].apiKey = '89b25efb23bf241601c0';
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
    ENV.APP.PUSHER_OPTS = { key: 'e77a2360c4b77ba37065' };
    ENV.API_HOST = 'https://as-lion-api.herokuapp.com';
    ENV.torii.providers['github-oauth2'].apiKey = '743d8bfa4937e587f1f4';
  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    crossOriginWhitelist: [ENV.API_HOST]
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.API_HOST + '/api/v1/token'
  };

  return ENV;
};
