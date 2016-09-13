import DS from 'ember-data';

export default DS.Model.extend({
  points: DS.attr('number'),
  user: DS.belongsTo('user', { async: true })
});
