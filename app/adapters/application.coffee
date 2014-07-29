`import DS from 'ember-data'`

ApplicationAdapter = DS.ActiveModelAdapter.extend
  host: window.ENV.API_URL
  namespace: 'api'

`export default ApplicationAdapter`
