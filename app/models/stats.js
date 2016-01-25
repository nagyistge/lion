import Ember from 'ember';
import DS from 'ember-data';
import User from './user';

Ember.Inflector.inflector.uncountable('stats');

export default User.extend({
  count: DS.attr('number')
});
