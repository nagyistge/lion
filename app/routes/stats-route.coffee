`import AuthenticatedRoute from './authenticated-route'`

StatsRoute = AuthenticatedRoute.extend
  model: ->
    @store.find('stats')

`export default StatsRoute`
