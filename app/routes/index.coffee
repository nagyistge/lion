`import AuthenticatedRoute from './authenticated'`

IndexRoute = AuthenticatedRoute.extend
  beforeModel: (transition) ->
    @transitionTo('tasks')
    @_super(transition)

`export default IndexRoute`
