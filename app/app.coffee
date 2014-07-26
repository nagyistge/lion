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

Raven.config('https://552d73bcf3804b9a8dd7748984e70235@app.getsentry.com/23433', {
  whitelistUrls: ['as-lion.herokuapp.com']
}).install()

loadInitializers(App, 'lion')

`export default App`
