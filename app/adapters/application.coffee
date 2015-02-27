`import DS from 'ember-data'`
`import config from 'lion/config/environment'`

ApplicationAdapter = DS.ActiveModelAdapter.extend
  host: config.API_HOST
  namespace: 'api'

`export default ApplicationAdapter`
