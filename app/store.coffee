`import DS from 'ember-data'`

ApplicationStore = DS.Store.extend()

ApplicationAdapter = DS.ActiveModelAdapter.reopen
  namespace: 'api'

ApplicationSerializer = DS.ActiveModelSerializer.extend
  serialize: ->
    json = @_super.apply(this, arguments)
    delete json.created_at
    json

  typeForRoot: (root) ->
    root = 'user' if root == 'winner' || root == 'winners'
    @_super(root)

`export default ApplicationStore`
`export default ApplicationAdapter`
`export default ApplicationSerializer`
