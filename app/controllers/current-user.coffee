`import Ember from 'ember'`
`import LocalStorage from '../local-storage'`

CurrentUserController = Ember.ObjectController.extend
  sync: ->
    currentUser = LocalStorage.getItem('currentUser')

    if !Ember.isEmpty(currentUser)
      @store.push('user', currentUser)
      @set('model', @store.getById('user', currentUser.id))
    else if @get('session.isAuthenticated')
      @store.find('user', 'me').then((user) =>
        @set('model', @store.getById('user', user.id))
      , =>)

  logout: ->
    @set('model', null)

  modelDidChange: (->
    LocalStorage.setItem('currentUser', @get('model')?.toJSON({ includeId: true }))
  ).observes('model')

`export default CurrentUserController`
