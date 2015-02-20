`import Ember from 'ember'`
`import Base from 'simple-auth-oauth2/authenticators/oauth2'`
`import config from 'lion/config/environment'`

OmniauthAuthenticator = Base.extend
  authenticate: ->
    new Ember.RSVP.Promise((resolve, reject) ->
      window.open(
        "#{config.API_URL}/auth/github", '_blank',
        'menubar=no,status=no,height=400,width=800'
      )

      Ember.$(window).on('loginSucceeded', (event, user) ->
        Ember.run ->
          resolve({ access_token: user.access_token })
      )

      Ember.$(window).on('loginFailed', (event, errors) ->
        Ember.run ->
          reject(errors)
      )
    )

`export default OmniauthAuthenticator`
