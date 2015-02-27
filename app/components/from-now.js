import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'time',

  timeFromNowInWords: (function() {
    return moment(this.get('time')).fromNow();
  }).property('time'),

  time: (function() {
    var time = this.get('value');
    var now = new Date();

    if (now < time) {
      return now;
    } else {
      return time;
    }
  }).property('value'),

  didInsertElement: function() {
    this.tick();
  },

  tick: function() {
    this.notifyPropertyChange('value');

    var nextTick = Ember.run.later(() => {
      this.tick();
    }, 1000);

    this.set('nextTick', nextTick);
  },

  willDestroyElement: function() {
    var nextTick = this.get('nextTick');
    Ember.run.cancel(nextTick);
  }
});
