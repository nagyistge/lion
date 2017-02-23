import Ember from 'ember';

const { computed, Controller } = Ember;

export default Controller.extend({
  scores: null,
  arrangedScores: computed.sort('scores', '_scoresSorting'),

  _scoresSorting: ['points:desc']
});
