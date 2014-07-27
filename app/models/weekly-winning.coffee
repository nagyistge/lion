`import DS from 'ember-data'`

WeeklyWinning = DS.Model.extend
  startDate: DS.attr('date')
  winner: DS.belongsTo('user')
  points: DS.attr('number')

`export default WeeklyWinning`
