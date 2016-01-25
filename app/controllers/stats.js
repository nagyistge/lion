import Ember from 'ember';

export default Ember.Controller.extend({
  model: null,

  categoryStats: Ember.computed.sort('model', '_countSorting'),

  _countSorting: ['count:desc']
});
