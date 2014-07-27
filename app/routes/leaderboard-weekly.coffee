`import AuthenticatedRoute from './authenticated'`

LeaderboardWeeklyRoute = AuthenticatedRoute.extend
  setupController: ->
    @_super.apply(this, arguments)

    @store.find('score', { time_span: 'weekly' }).then((scores) =>
      @controllerFor('leaderboard').set('content', scores)
    )

`export default LeaderboardWeeklyRoute`
