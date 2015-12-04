import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':as-progress'],

  ratio: null,

  _previousWidth: '0%',

  _width: Ember.computed('ratio', function() {
    return `${Math.min(1, this.get('ratio')) * 100}%`;
  }),

  _updateWidth: Ember.on('didInsertElement', function() {
    this.$('> div').velocity({
      width: [this.get('_width'), this.get('_previousWidth')]
    }, {
      duration: 350
    });

    this.set('_previousWidth', this.get('_width'));
  }).observes('_width')
});
