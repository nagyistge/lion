import Ember from 'ember';

const { get, Route } = Ember;

export default Route.extend({
  model({ category }) {
    return get(this, 'store').query('stats', { category });
  }
});
