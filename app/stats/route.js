import Ember from 'ember';

export default Ember.Route.extend({
  model({ category }) {
    return this.store.query('stats', { category });
  }
});
