`import AuthenticatedRoute from './authenticated-route'`

LeaderboardAllTimeRoute = AuthenticatedRoute.extend
  setupController: ->
    @_super.apply(this, arguments)

    @store.find('score', { time_span: 'all_time' }).then((scores) =>
      @controllerFor('leaderboard').set('content', scores)
    )

`export default LeaderboardAllTimeRoute`
