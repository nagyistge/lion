`import AuthenticatedRoute from './authenticated-route'`

IndexRoute = AuthenticatedRoute.extend
  beforeModel: (transition) ->
    @transitionTo('tasks')
    @_super(transition)

`export default IndexRoute`
