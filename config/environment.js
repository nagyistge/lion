/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      PUSHER_OPTS: { key: 'b97fe1ecbf31373c3699' }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.API_HOST = 'http://localhost:3000';
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {
    ENV.APP.PUSHER_OPTS = { key: 'e77a2360c4b77ba37065' };
    ENV.API_HOST = 'https://as-lion-api.herokuapp.com';
  }

  return ENV;
};
