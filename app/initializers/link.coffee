`import Ember from 'ember'`

LinkInitializer =
  name: 'link'

  initialize: () ->
    Ember.LinkView.reopen
      activeDidChange: (->
        if @get('parentActiveView')
          @get('parentActiveView').set(@get('parentActiveClass'), @get('active') == 'active')
      ).observes('active').on('init')

`export default LinkInitializer`
