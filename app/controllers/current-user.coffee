`import Ember from 'ember'`
`import LocalStorage from '../local-storage'`

CurrentUserController = Ember.ObjectController.extend
  sync: ->
    currentUser = LocalStorage.getItem('currentUser')

    if !Ember.isEmpty(currentUser)
      @store.push('user', currentUser)
      @set('model', @store.getById('user', currentUser.id))
    else
      Ember.$.getJSON("#{window.ENV.API_URL}/api/users/me").then((data) =>
        @store.pushPayload(data)
        @set('model', @store.getById('user', data.user.id))
      )

  logout: ->
    @set('model', null)

  modelDidChange: (->
    LocalStorage.setItem('currentUser', @get('model')?.toJSON({ includeId: true }))
  ).observes('model')

`export default CurrentUserController`
