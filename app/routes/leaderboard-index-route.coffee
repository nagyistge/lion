`import AuthenticatedRoute from './authenticated-route'`

LeaderboardIndexRoute = AuthenticatedRoute.extend
  beforeModel: (transition) ->
    @transitionTo('leaderboard.weekly')
    @_super(transition)

`export default LeaderboardIndexRoute`
