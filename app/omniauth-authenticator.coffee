`import Ember from 'ember'`
`import Base from 'simple-auth-oauth2/authenticators/oauth2'`

OmniauthAuthenticator = Base.extend
  authenticate: ->
    new Ember.RSVP.Promise((resolve, reject) ->
      window.open(
        "#{window.ENV.API_HOST}/auth/github", '_blank',
        'menubar=no,status=no,height=400,width=800'
      )

      Ember.$(window).on('loginSucceeded', (event, user) ->
        resolve({ access_token: user.access_token })
      )

      Ember.$(window).on('loginFailed', (event, errors) ->
        reject(errors)
      )
    )

`export default OmniauthAuthenticator`
