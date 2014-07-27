`import Ember from 'ember'`

EditableView = Ember.Mixin.create
  focusOnInsert: (->
    @$().val @$().val()
    @$().focus()
  ).on('didInsertElement')

`export default EditableView`
