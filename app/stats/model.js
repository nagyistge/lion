import Ember from 'ember';
import DS from 'ember-data';

Ember.Inflector.inflector.uncountable('stats');

export default DS.Model.extend({
  count: DS.attr('number'),
  user: DS.belongsTo('user', { async: true })
});