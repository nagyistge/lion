`import DS from 'ember-data'`

Score = DS.Model.extend
  points: DS.attr('number')
  user: DS.belongsTo('user')

`export default Score`
