`import Ember from 'ember'`
`import Resolver from 'ember/resolver'`
`import loadInitializers from 'ember/load-initializers'`

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend
  modulePrefix: 'lion'
  Resolver: Resolver

  lookup: ->
    @__container__.lookup.apply(@__container__, arguments)

  ready: ->
    Notify.requestPermission() if Notify.isSupported() && Notify.needsPermission()

loadInitializers(App, 'lion')

`export default App`
