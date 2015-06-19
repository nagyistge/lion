import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':as-live-date'],
  
  model: null,

  description: Ember.computed('model', '_now', function() {
    return moment(this.get('model')).to(this.get('_now'));
  }),

  tick: Ember.on('didInsertElement', function() {
    this.set('_now', moment());

    this.set('timeout', setTimeout(() => {
      Ember.run(this, 'tick');
    }, 1000));
  }),

  stopTicking: Ember.on('willDestroyElement', function() {
    clearTimeout(this.get('timeout'));
  }),

  _now: null
});
