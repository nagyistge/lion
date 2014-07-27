`import Ember from 'ember'`

pluralize = (number, options) ->
  single = options.hash['single']
  Ember.assert('pluralize requires a singular string (single)', single)
  plural = options.hash['plural'] || single + 's'

  if number == 1 then single else plural

`export default pluralize`
