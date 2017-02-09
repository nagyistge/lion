import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  accessToken: attr('string'),
  code: attr('string'),
  expiresIn: attr('number'),

  user: belongsTo('user', { async: true })
});
