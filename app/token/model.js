import DS from 'ember-data';

export default DS.Model.extend({
  accessToken: DS.attr('string'),
  code: DS.attr('string'),
  expiresIn: DS.attr('number'),

  user: DS.belongsTo('user', { async: true })
});
