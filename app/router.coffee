`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route('login')
  @resource('tasks', ->
    @resource('task', path: ':task_id')
  )
  @resource('leaderboard', ->
    @route('all-time')
    @route('weekly')
  )
  @route('hall-of-fame')
  @route('stats')

`export default Router`
