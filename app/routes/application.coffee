`import Ember from 'ember'`
`import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin'`

ApplicationRoute = Ember.Route.extend(ApplicationRouteMixin,
  beforeModel: ->
    @controllerFor('currentUser').sync()

  actions:
    authenticate: (provider) ->
      @get('session').authenticate('authenticator:torii-oauth2', {
        torii: this.get('torii'),
        provider: provider
      }, (error) ->
        alert('There was an error when trying to sign you in: ' + error)
      )

    sessionAuthenticationSucceeded: ->
      @_super.apply(this, arguments)
      @controllerFor('currentUser').sync()

    sessionInvalidationSucceeded: ->
      @controllerFor('currentUser').logout()
      @_super.apply(this, arguments)
)

`export default ApplicationRoute`
