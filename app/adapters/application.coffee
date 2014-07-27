`import DS from 'ember-data'`

ApplicationAdapter = DS.ActiveModelAdapter.extend
  host: window.ENV.API_HOST
  namespace: 'api'

`export default ApplicationAdapter`
