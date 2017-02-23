import DS from 'ember-data';
import Ember from 'ember';

const { attr, belongsTo, Model } = DS;

Ember.Inflector.inflector.uncountable('stats');

export default Model.extend({
  count: attr('number'),
  user: belongsTo('user', { async: true })
});
