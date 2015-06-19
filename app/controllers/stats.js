import Ember from 'ember';

export default Ember.Controller.extend({
  model: null,

  pullRequestStats: Ember.computed.sort('model', '_pullRequestsSorting'),
  additionStats: Ember.computed.sort('model', '_additionsSorting'),
  deletionStats: Ember.computed.sort('model', '_deletionsSorting'),
  reviewStats: Ember.computed.sort('model', '_reviewsSorting'),
  badgeStats: Ember.computed.sort('model', '_badgesSorting'),

  _pullRequestsSorting: ['pullRequestsCount:desc'],
  _additionsSorting: ['numberOfAdditions:desc'],
  _deletionsSorting: ['numberOfDeletions:desc'],
  _reviewsSorting: ['pullRequestReviewsCount:desc'],
  _badgesSorting: ['badgesCount:desc']
});
