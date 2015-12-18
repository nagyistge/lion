import DS from 'ember-data';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  winner: DS.belongsTo('user', { async: true }),
  points: DS.attr('number')
});
