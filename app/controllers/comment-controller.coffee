`import Ember from 'ember'`
`import Editable from '../mixins/editable'`

CommentController = Ember.ObjectController.extend(Editable,
  editableField: 'body'

  remove: ->
    return unless confirm('Are you sure?')
    comment = @get('model')
    comment.deleteRecord()
    comment.save()

  actions:
    remove: ->
      @remove()
)

`export default CommentController`
