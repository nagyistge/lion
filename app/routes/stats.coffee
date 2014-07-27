`import AuthenticatedRoute from './authenticated'`

StatsRoute = AuthenticatedRoute.extend
  model: ->
    @store.find('stats')

`export default StatsRoute`
