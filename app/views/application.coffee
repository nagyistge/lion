`import Ember from 'ember'`

ApplicationView = Ember.View.extend
  templateName: (->
    @get('controller.layoutName')
  ).property('controller.layoutName')

  templateNameDidChange: (->
    @rerender()
  ).observes('templateName')

`export default ApplicationView`
