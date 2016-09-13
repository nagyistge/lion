import Ember from 'ember';
import DS from 'ember-data';
import User from 'lion/user/model';

Ember.Inflector.inflector.uncountable('stats');

export default User.extend({
  count: DS.attr('number')
});
