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
    },
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:oauth2-bearer'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {
    ENV.APP.PUSHER_OPTS = { key: 'e77a2360c4b77ba37065' }
  }

  return ENV;
};
