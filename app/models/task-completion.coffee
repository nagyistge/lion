`import DS from 'ember-data'`

TaskCompletion = DS.Model.extend
  user: DS.belongsTo('user')
  task: DS.belongsTo('task')

`export default TaskCompletion`
