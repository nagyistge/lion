import Ember from 'ember';

export default Ember.Controller.extend({
  scores: null,
  arrangedScores: Ember.computed.sort('scores', '_scoresSorting'),

  _scoresSorting: ['points:desc']
});
