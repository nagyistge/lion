import DS from 'ember-data';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  winner: DS.belongsTo('user'),
  points: DS.attr('number')
});
