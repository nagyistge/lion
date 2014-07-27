`import OmniauthAuthenticator from '../omniauth-authenticator'`

Authentication =
  name: 'authentication'

  initialize: (container) ->
    container.register('authenticator:omniauth', OmniauthAuthenticator)

`export default Authentication`
