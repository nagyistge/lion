SessionInitializer =
  name: 'session'
  initialize: (container, app) ->
    app.inject 'route', 'session', 'service:session'

`export default SessionInitializer`
