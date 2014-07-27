`import Ember from 'ember'`
`import Resolver from 'ember/resolver'`
`import loadInitializers from 'ember/load-initializers'`
`import formattedDate from './helpers/formatted-date'`
`import pluralize from './helpers/pluralize'`
`import markdown from './helpers/markdown'`
`import EditTextField from './views/edit-text-field'`
`import EditTextArea from './views/edit-text-area'`

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

Ember.Handlebars.registerBoundHelper('formattedDate', formattedDate)
Ember.Handlebars.registerBoundHelper('pluralize', pluralize)
Ember.Handlebars.registerBoundHelper('markdown', markdown)
Ember.Handlebars.helper('edit-text-field', EditTextField)
Ember.Handlebars.helper('edit-text-area', EditTextArea)

loadInitializers(App, 'lion')

`export default App`
