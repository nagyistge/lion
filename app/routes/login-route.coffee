`import Ember from 'ember'`

LoginRoute = Ember.Route.extend
  beforeModel: ->
    @transitionTo('tasks') if @get('session.isAuthenticated')

  setupController: ->
    @controllerFor('application').connectLayout('simple')

`export default LoginRoute`
