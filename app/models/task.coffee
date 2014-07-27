`import DS from 'ember-data'`
`import Creatable from '../mixins/creatable'`
`import Ember from 'ember'`

Task = DS.Model.extend(DS.Pushable, Creatable,
  title: DS.attr('string')
  completed: DS.attr('boolean', { defaultValue: false })
  user: DS.belongsTo('user')
  assignee: DS.belongsTo('user')
  assigneeWas: Ember.Object.create()
  hidden: false
  comments: DS.hasMany('comment')
  currentHideTimer: false

  toggleCompleted: (user) ->
    @set('completed', !@get('completed'))

    if @currentHideTimer
      Ember.run.cancel(@currentHideTimer)
      @currentHideTimer = false

    if @get('completed')
      @store.createRecord('taskCompletion', {
        task: this,
        user: user
      }).save().then(=>
        @currentHideTimer = Ember.run.later(this, (=>
          @set('hidden', true)
        ), 5000)
      )
    else
      Ember.$.ajax(
        type: 'DELETE',
        url: '/api/task_completions',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({ task_id: @get('id') })
      ).then((data) =>
        Ember.run => @store.pushPayload(data.task_completion)
      )

  assigneeDidChange: (->
    if @get('assigneeWas.id') != @get('assignee.id')
      @notifyAssignment()
  ).observes('assignee.id')

  assigneeWillChange: (->
    @assigneeWas = @get('assignee')
  ).observesBefore('assignee.id')

  notifyAssignment: ->
    if @get('assignee.id') == @controllerFor('currentUser').get('id')
      new Notify('You have been assigned an issue', { body: @get('title') }).show()
)

`export default Task`
