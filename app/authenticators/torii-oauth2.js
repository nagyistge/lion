import Ember from 'ember';
import config from 'lion/config/environment';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({
  torii: Ember.inject.service(),
  serverTokenEndpoint: config.serverTokenEndpoint,

  authenticate(options) {
    return this._fetchOauthData(options).then(this._fetchAccessToken.bind(this));
  },

  _fetchAccessToken(oauthCredentials) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const serverTokenEndpoint = this.get('serverTokenEndpoint');
      this.makeRequest(serverTokenEndpoint, oauthCredentials).then((response) => {
        Ember.run(() => {
          const expiresAt = this._absolutizeExpirationTime(response['expires_in']);
          this._scheduleAccessTokenRefresh(response['expires_in'], expiresAt, response['refresh_token']);
          if (!Ember.isEmpty(expiresAt)) {
            response = Ember.merge(response, { 'expires_at': expiresAt });
          }
          resolve(response);
        });
      }, (xhr) => {
        Ember.run(() => {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  _fetchOauthData(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('torii').open(options).then((oauthData) => {
        resolve({
          grant_type: 'authorization_code',
          provider: oauthData.provider,
          code: oauthData.authorizationCode
        });
      }, (error) => {
        reject(error);
      });
    });
  }
});
