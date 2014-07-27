`import Ember from 'ember'`
`import DS from 'ember-data'`

Creatable = Ember.Mixin.create
  createdAt: DS.attr('date', defaultValue: -> new Date())

`export default Creatable`
