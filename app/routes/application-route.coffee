`import Ember from 'ember'`
`import App from '../app'`
`import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin'`

ApplicationRoute = Ember.Route.extend(ApplicationRouteMixin,
  login: ->
    App.lookup('controller:currentUser').sync()

  logout: ->
    App.lookup('controller:currentUser').logout()

  actions:
    authenticateSession: ->
      @get('session').authenticate('authenticator:omniauth')

    sessionAuthenticationSucceeded: ->
      @_super.apply(this, arguments)
      @login()

    sessionInvalidationSucceeded: ->
      @logout()
      @_super.apply(this, arguments)
)

`export default ApplicationRoute`
