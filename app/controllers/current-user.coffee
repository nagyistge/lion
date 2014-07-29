`import Ember from 'ember'`
`import LocalStorage from '../local-storage'`

CurrentUserController = Ember.ObjectController.extend
  sync: ->
    Ember.$.getJSON("#{window.ENV.API_URL}/api/users/me").then((data) =>
      @store.pushPayload(data)
      @set('content', @store.getById('user', data.user.id))
    )

  logout: ->
    @set('content', null)

  content: (->
    if arguments.length > 1
      # setter
      @_super.apply(this, arguments)
    else
      # getter
      currentUser = LocalStorage.getItem('currentUser')

      if !Ember.isEmpty(currentUser)
        @store.push('user', currentUser)
        @store.getById('user', currentUser.id)
      else
        @sync()
  ).property()

  contentDidChange: (->
    LocalStorage.setItem('currentUser', @get('content')?.toJSON({ includeId: true }))
  ).observes('content')

`export default CurrentUserController`
