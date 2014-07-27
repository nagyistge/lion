`import DS from 'ember-data'`
`import Creatable from '../mixins/creatable'`

Comment = DS.Model.extend(DS.Pushable, Creatable,
  body: DS.attr('string')
  user: DS.belongsTo('user')
  task: DS.belongsTo('task')
)

`export default Comment`
