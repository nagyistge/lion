import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  startDate: attr('date'),
  points: attr('number'),

  winner: belongsTo('user', { async: true })
});
