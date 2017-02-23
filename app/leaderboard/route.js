import Ember from 'ember';

const { get, Route, set } = Ember;

export default Route.extend({
  model({ time_span }) {
    return get(this, 'store').query('score', { time_span });
  },

  setupController(controller, model) {
    set(controller, 'scores', model);
  }
});
