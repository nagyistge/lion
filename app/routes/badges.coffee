`import AuthenticatedRoute from './authenticated'`

HallOfFameRoute = AuthenticatedRoute.extend
  model: ->
    @store.find('weeklyWinning')

`export default HallOfFameRoute`
