import Ember from 'ember';
import DS from 'ember-data';
import User from './user';

Ember.Inflector.inflector.uncountable('stats');

export default User.extend({
  pullRequestsCount: DS.attr('number'),
  numberOfAdditions: DS.attr('number'),
  numberOfDeletions: DS.attr('number'),
  pullRequestReviewsCount: DS.attr('number'),
  completedTasksCount: DS.attr('number'),
  badgesCount: DS.attr('number')
});
