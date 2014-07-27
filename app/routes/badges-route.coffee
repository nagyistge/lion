`import AuthenticatedRoute from './authenticated-route'`

HallOfFameRoute = AuthenticatedRoute.extend
  model: ->
    @store.find('weeklyWinning')

`export default HallOfFameRoute`
