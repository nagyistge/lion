`import Ember from 'ember'`

TaskItemView = Ember.View.extend
  templateName: 'task_item'
  tagName: 'li'
  classNameBindings: [':task_item', 'controller.completed', 'isEditing:editing', 'active', 'controller.id']

  didInsertElement: ->
    Ember.$(document).foundation()
    @.$().linkify()

`export default TaskItemView`
