import Ember from 'ember';

export default Ember.Route.extend({
  model({ time_span }) {
    return this.store.query('score', { time_span });
  },

  setupController(controller, model) {
    controller.set('scores', model);
  }
});
