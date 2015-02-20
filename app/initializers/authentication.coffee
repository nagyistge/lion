`import Ember from 'ember'`
`import OmniauthAuthenticator from '../omniauth-authenticator'`
`import config from 'lion/config/environment'`

Authentication =
  name: 'authentication'

  initialize: (container) ->
    container.register('authenticator:omniauth', OmniauthAuthenticator)

    config['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer'
      crossOriginWhitelist: [config.API_URL]
    }

    onMessage = (event) ->
      return if event.origin != config.API_URL

      if event.data.access_token?
        Ember.$(window).trigger('loginSucceeded', event.data)
      else
        Ember.$(window).trigger('loginFailed', event.data)

    if window.attachEvent
      window.attachEvent('onmessage', onMessage)
    else if window.addEventListener
      window.addEventListener('message', onMessage, false)

`export default Authentication`
