import Ember from 'ember';
import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';
import _ from 'npm:lodash';

export default OAuth2.extend({
  authenticate: function(options) {
    return this._fetchOauthData(options).then(this._fetchAccessToken.bind(this));
  },

  _fetchAccessToken: function(oauthCredentials) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.makeRequest(this.get('serverTokenEndpoint'), oauthCredentials).then((response) => {
        Ember.run(() => {
          var expiresAt = this.absolutizeExpirationTime(response.expires_in);

          this.scheduleAccessTokenRefresh(
            response.expires_in,
            expiresAt,
            response.refresh_token
          );

          resolve(_({}).extend(response, { expires_at: expiresAt }));
        });
      }, function(xhr) {
        Ember.run(() => {
          var error;

          if (xhr.responseJSON != null) {
            error = xhr.responseJSON;
          } else {
            error = xhr.responseText;
          }

          reject(error);
        });
      });
    });
  },

  _fetchOauthData: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      options.torii.open(options.provider).then(function(oauthData) {
        Ember.run(this, resolve, {
          grant_type: 'authorization_code',
          provider: oauthData.provider,
          code: oauthData.authorizationCode
        });
      }, function(error) {
        Ember.run(this, reject, error);
      });
    });
  }
});
