import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':as-user-performance'],

  model: null,
  maxPoints: null,
  points: Ember.computed.oneWay('model.points'),

  pointsRatio: Ember.computed('points', 'maxPoints', function() {
    var maxPoints = this.get('maxPoints');

    if (maxPoints === 0) {
      return 0;
    } else {
      return this.get('points') / maxPoints;
    }
  })
});
