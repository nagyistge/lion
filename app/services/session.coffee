`import Ember from 'ember'`
`import App from '../app'`

SessionService = Ember.Object.extend
  login: ->
    App.lookup('controller:currentUser').sync()

  logout: ->
    App.lookup('controller:currentUser').logout()

`export default SessionService`
