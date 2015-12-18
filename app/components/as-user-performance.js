import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':as-user-performance'],

  model: null,
  points: Ember.computed.oneWay('model.points')
});
