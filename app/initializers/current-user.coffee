CurrentUserInitializer =
  name: 'current-user'

  initialize: (container, app) ->
    app.inject('model', 'currentUser', 'controller:currentUser')

`export default CurrentUserInitializer`
