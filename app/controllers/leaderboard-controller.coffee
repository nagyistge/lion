`import Ember from 'ember'`

LeaderboardController = Ember.ArrayController.extend(new Ember.Pushable('score'),
  sortProperties: ['points']
  sortAscending: false
)

`export default LeaderboardController`
