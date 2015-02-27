`import Ember from 'ember'`
`import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2'`

ToriiOAuth2 = OAuth2.extend
  authenticate: (options) ->
    @fetchOauthData(options).then @fetchAccessToken.bind(this)
  fetchAccessToken: (oauthCredentials) ->
    _this = this
    new (Ember.RSVP.Promise)((resolve, reject) ->
      _this.makeRequest(_this.serverTokenEndpoint, oauthCredentials).then ((response) ->
        Ember.run ->
          expiresAt = _this.absolutizeExpirationTime(response.expires_in)
          _this.scheduleAccessTokenRefresh response.expires_in, expiresAt, response.refresh_token
          resolve Ember.$.extend(response, expires_at: expiresAt)
          return
        return
      ), (xhr) ->
        Ember.run ->
          reject xhr.responseJSON or xhr.responseText
          return
        return
      return
)
  fetchOauthData: (options) ->
    new (Ember.RSVP.Promise)((resolve, reject) ->
      options.torii.open(options.provider).then ((oauthData) ->
        resolve
          grant_type: 'authorization_code'
          provider: oauthData.provider
          code: oauthData.authorizationCode
        return
      ), (error) ->
        reject error
        return
      return
)

`export default ToriiOAuth2`
