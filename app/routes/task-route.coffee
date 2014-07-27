`import Ember from 'ember'`
`import AuthenticatedRoute from './authenticated-route'`

TaskRoute = AuthenticatedRoute.extend
  beforeModel: (transition) ->
    Ember.run.scheduleOnce('afterRender', this, =>
      taskItem = Ember.$(".#{@get('controller.id')}")
      taskItem[0].scrollIntoView() if taskItem && !taskItem.isVisible()
    )

    @_super(transition)

  model: (params) ->
    @store.find('task', params.task_id)

`export default TaskRoute`
